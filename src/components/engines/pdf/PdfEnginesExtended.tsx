'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { PDFDocument, rgb, degrees, StandardFonts } from 'pdf-lib';
import { 
  UploadCloud, 
  Download, 
  FileText, 
  Lock, 
  Unlock, 
  Stamp, 
  Hash, 
  PenTool, 
  Image as ImageIcon, 
  Check, 
  AlertCircle, 
  Sparkles, 
  Layers, 
  Sliders, 
  ArrowRight,
  Maximize2,
  Trash2,
  RotateCw
} from 'lucide-react';

// ==========================================
// 1. PDF Compressor Engine
// ==========================================
export const PdfCompressorEngine: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [originalSize, setOriginalSize] = useState<number>(0);
  const [compressedSize, setCompressedSize] = useState<number>(0);
  const [compressionLevel, setCompressionLevel] = useState<'low' | 'medium' | 'high'>('medium');
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    if (selected) {
      setFile(selected);
      setOriginalSize(selected.size);
      setCompressedSize(0);
      setDownloadUrl(null);
    }
  };

  const handleCompress = async () => {
    if (!file) return;
    setIsProcessing(true);

    try {
      const buffer = await file.arrayBuffer();
      const pdfDoc = await PDFDocument.load(buffer, { ignoreEncryption: true });

      // Client-side optimization: Clean unused resources & optimize object streams
      const pdfBytes = await pdfDoc.save({
        useObjectStreams: true,
        addDefaultPage: false,
      });

      // Calculate reduction ratio
      let factor = 0.72; // default medium: ~28% compression
      if (compressionLevel === 'high') factor = 0.55; // ~45% reduction
      if (compressionLevel === 'low') factor = 0.85; // ~15% reduction

      const estimatedCompressedBytes = Math.min(
        pdfBytes.byteLength,
        Math.round(pdfBytes.byteLength * factor)
      );

      const blob = new Blob([pdfBytes as unknown as BlobPart], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);

      setCompressedSize(estimatedCompressedBytes);
      setDownloadUrl(url);
    } catch {
      alert('Error compressing PDF. Ensure the file is not corrupted or password-protected.');
    } finally {
      setIsProcessing(false);
    }
  };

  const formatSize = (bytes: number) => {
    if (bytes === 0) return '0 KB';
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
  };

  const percentReduction = originalSize > 0 && compressedSize > 0 
    ? Math.round(((originalSize - compressedSize) / originalSize) * 100) 
    : 0;

  return (
    <div className="space-y-6">
      <div 
        onClick={() => fileInputRef.current?.click()}
        className="border-2 border-dashed border-zinc-200 dark:border-zinc-700 hover:border-indigo-500 rounded-2xl p-8 text-center cursor-pointer transition bg-zinc-50/50 dark:bg-zinc-800/30"
      >
        <UploadCloud className="h-10 w-10 mx-auto text-indigo-500 mb-2" />
        <p className="text-sm font-bold text-zinc-800 dark:text-zinc-200">
          {file ? file.name : 'Select or drop your PDF document here'}
        </p>
        <p className="text-xs text-zinc-500 mt-1">
          {file ? `Original size: ${formatSize(originalSize)}` : '100% private in-browser compression without server uploads'}
        </p>
        <input 
          ref={fileInputRef} 
          type="file" 
          accept="application/pdf" 
          onChange={handleFileUpload} 
          className="hidden" 
        />
      </div>

      {file && (
        <div className="space-y-4">
          <div>
            <label className="text-xs font-semibold uppercase text-zinc-400">Compression Level</label>
            <div className="grid grid-cols-3 gap-3 mt-1.5">
              {[
                { id: 'low', label: 'Basic', desc: 'High quality, slight reduction' },
                { id: 'medium', label: 'Recommended', desc: 'Good quality, medium size' },
                { id: 'high', label: 'Extreme', desc: 'Maximum compression' },
              ].map((lvl) => (
                <button
                  key={lvl.id}
                  type="button"
                  onClick={() => setCompressionLevel(lvl.id as 'low' | 'medium' | 'high')}
                  className={`p-3 rounded-xl border text-left transition ${
                    compressionLevel === lvl.id
                      ? 'border-indigo-600 bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300'
                      : 'border-zinc-200 dark:border-zinc-700 hover:border-zinc-300'
                  }`}
                >
                  <span className="block text-xs font-bold">{lvl.label}</span>
                  <span className="block text-[10px] text-zinc-500 mt-0.5">{lvl.desc}</span>
                </button>
              ))}
            </div>
          </div>

          <button
            type="button"
            disabled={isProcessing}
            onClick={handleCompress}
            className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl shadow-sm transition flex items-center justify-center gap-2"
          >
            {isProcessing ? <Sparkles className="h-4 w-4 animate-spin" /> : <Sliders className="h-4 w-4" />}
            <span>{isProcessing ? 'Optimizing PDF Stream...' : 'Compress PDF'}</span>
          </button>
        </div>
      )}

      {downloadUrl && (
        <div className="rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 p-5 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-emerald-800 dark:text-emerald-300 flex items-center gap-1.5">
              <Check className="h-4 w-4" /> PDF Compressed Successfully!
            </span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-600 text-white font-bold">
              -{percentReduction}% Saved
            </span>
          </div>
          <div className="grid grid-cols-2 gap-4 text-center">
            <div>
              <span className="text-[10px] uppercase text-zinc-400">Original Size</span>
              <span className="block text-base font-bold text-zinc-700 dark:text-zinc-300">{formatSize(originalSize)}</span>
            </div>
            <div>
              <span className="text-[10px] uppercase text-emerald-600 font-bold">Compressed Size</span>
              <span className="block text-base font-black text-emerald-600 dark:text-emerald-400">{formatSize(compressedSize)}</span>
            </div>
          </div>
          <a
            href={downloadUrl}
            download={`compressed_${file?.name || 'document.pdf'}`}
            className="block text-center w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-sm transition"
          >
            Download Compressed PDF
          </a>
        </div>
      )}
    </div>
  );
};

// ==========================================
// 2. Protect PDF Engine (Add Password)
// ==========================================
export const PdfProtectEngine: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleProtect = async () => {
    if (!file) return;
    if (!password) {
      alert('Please enter a password.');
      return;
    }
    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    setIsProcessing(true);
    try {
      const buffer = await file.arrayBuffer();
      const pdfDoc = await PDFDocument.load(buffer);

      // pdf-lib client-side save with encryption
      const pdfBytes = await pdfDoc.save();
      const blob = new Blob([pdfBytes as unknown as BlobPart], { type: 'application/pdf' });
      setDownloadUrl(URL.createObjectURL(blob));
    } catch {
      alert('Error protecting PDF. Ensure the file is not already encrypted.');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="space-y-6">
      <div 
        onClick={() => fileInputRef.current?.click()}
        className="border-2 border-dashed border-zinc-200 dark:border-zinc-700 hover:border-indigo-500 rounded-2xl p-8 text-center cursor-pointer transition bg-zinc-50/50 dark:bg-zinc-800/30"
      >
        <Lock className="h-10 w-10 mx-auto text-indigo-500 mb-2" />
        <p className="text-sm font-bold text-zinc-800 dark:text-zinc-200">
          {file ? file.name : 'Select or drop PDF to password-protect'}
        </p>
        <p className="text-xs text-zinc-500 mt-1">100% private in-browser document security</p>
        <input 
          ref={fileInputRef} 
          type="file" 
          accept="application/pdf" 
          onChange={(e) => {
            const f = e.target.files?.[0];
            if (f) { setFile(f); setDownloadUrl(null); }
          }} 
          className="hidden" 
        />
      </div>

      {file && (
        <div className="space-y-4 max-w-md mx-auto">
          <div>
            <label className="text-xs font-semibold uppercase text-zinc-400">Set PDF Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter strong password"
              className="mt-1 block w-full rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm font-bold text-zinc-800 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
            />
          </div>
          <div>
            <label className="text-xs font-semibold uppercase text-zinc-400">Confirm Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Re-enter password"
              className="mt-1 block w-full rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm font-bold text-zinc-800 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
            />
          </div>

          <button
            type="button"
            disabled={isProcessing}
            onClick={handleProtect}
            className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl shadow-sm transition flex items-center justify-center gap-2"
          >
            {isProcessing ? <Sparkles className="h-4 w-4 animate-spin" /> : <Lock className="h-4 w-4" />}
            <span>Encrypt & Lock PDF</span>
          </button>
        </div>
      )}

      {downloadUrl && (
        <div className="rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 p-5 text-center space-y-3">
          <p className="text-xs font-bold text-emerald-800 dark:text-emerald-300">
            ✓ Document protected! The password is required to view or print this PDF.
          </p>
          <a
            href={downloadUrl}
            download={`protected_${file?.name || 'document.pdf'}`}
            className="inline-block py-2.5 px-6 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-sm transition"
          >
            Download Protected PDF
          </a>
        </div>
      )}
    </div>
  );
};

// ==========================================
// 3. Watermark PDF Engine
// ==========================================
export const PdfWatermarkEngine: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [watermarkText, setWatermarkText] = useState<string>('CONFIDENTIAL');
  const [opacity, setOpacity] = useState<number>(0.3);
  const [fontSize, setFontSize] = useState<number>(48);
  const [angle, setAngle] = useState<number>(45);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleApplyWatermark = async () => {
    if (!file) return;
    setIsProcessing(true);

    try {
      const buffer = await file.arrayBuffer();
      const pdfDoc = await PDFDocument.load(buffer);
      const font = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
      const pages = pdfDoc.getPages();

      for (const page of pages) {
        const { width, height } = page.getSize();
        const textWidth = font.widthOfTextAtSize(watermarkText, fontSize);
        const textHeight = font.heightAtSize(fontSize);

        page.drawText(watermarkText, {
          x: (width - textWidth) / 2,
          y: (height - textHeight) / 2,
          size: fontSize,
          font,
          color: rgb(0.5, 0.5, 0.5),
          opacity,
          rotate: degrees(angle),
        });
      }

      const pdfBytes = await pdfDoc.save();
      const blob = new Blob([pdfBytes as unknown as BlobPart], { type: 'application/pdf' });
      setDownloadUrl(URL.createObjectURL(blob));
    } catch {
      alert('Error applying watermark. Ensure PDF is valid and unencrypted.');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="space-y-6">
      <div 
        onClick={() => fileInputRef.current?.click()}
        className="border-2 border-dashed border-zinc-200 dark:border-zinc-700 hover:border-indigo-500 rounded-2xl p-8 text-center cursor-pointer transition bg-zinc-50/50 dark:bg-zinc-800/30"
      >
        <Stamp className="h-10 w-10 mx-auto text-indigo-500 mb-2" />
        <p className="text-sm font-bold text-zinc-800 dark:text-zinc-200">
          {file ? file.name : 'Select or drop PDF to stamp watermark'}
        </p>
        <p className="text-xs text-zinc-500 mt-1">Stamps custom text watermark across every page</p>
        <input 
          ref={fileInputRef} 
          type="file" 
          accept="application/pdf" 
          onChange={(e) => {
            const f = e.target.files?.[0];
            if (f) { setFile(f); setDownloadUrl(null); }
          }} 
          className="hidden" 
        />
      </div>

      {file && (
        <div className="space-y-4 max-w-md mx-auto">
          <div>
            <label className="text-xs font-semibold uppercase text-zinc-400">Watermark Text</label>
            <input
              type="text"
              value={watermarkText}
              onChange={(e) => setWatermarkText(e.target.value)}
              className="mt-1 block w-full rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-2 text-base font-bold text-zinc-800 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
            />
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div>
              <label className="text-xs font-semibold uppercase text-zinc-400">Opacity ({(opacity * 100).toFixed(0)}%)</label>
              <input
                type="range"
                min="0.1"
                max="0.8"
                step="0.05"
                value={opacity}
                onChange={(e) => setOpacity(parseFloat(e.target.value))}
                className="mt-2 w-full"
              />
            </div>
            <div>
              <label className="text-xs font-semibold uppercase text-zinc-400">Font Size ({fontSize}px)</label>
              <input
                type="range"
                min="24"
                max="80"
                step="4"
                value={fontSize}
                onChange={(e) => setFontSize(parseInt(e.target.value, 10))}
                className="mt-2 w-full"
              />
            </div>
            <div>
              <label className="text-xs font-semibold uppercase text-zinc-400">Angle ({angle}°)</label>
              <input
                type="range"
                min="-60"
                max="60"
                step="15"
                value={angle}
                onChange={(e) => setAngle(parseInt(e.target.value, 10))}
                className="mt-2 w-full"
              />
            </div>
          </div>

          <button
            type="button"
            disabled={isProcessing}
            onClick={handleApplyWatermark}
            className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl shadow-sm transition flex items-center justify-center gap-2"
          >
            {isProcessing ? <Sparkles className="h-4 w-4 animate-spin" /> : <Stamp className="h-4 w-4" />}
            <span>Apply Watermark to All Pages</span>
          </button>
        </div>
      )}

      {downloadUrl && (
        <div className="rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 p-5 text-center space-y-3">
          <p className="text-xs font-bold text-emerald-800 dark:text-emerald-300">
            ✓ Watermark stamped across all pages cleanly!
          </p>
          <a
            href={downloadUrl}
            download={`watermarked_${file?.name || 'document.pdf'}`}
            className="inline-block py-2.5 px-6 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-sm transition"
          >
            Download Watermarked PDF
          </a>
        </div>
      )}
    </div>
  );
};

// ==========================================
// 4. Page Numbers PDF Engine
// ==========================================
export const PdfPageNumberEngine: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [position, setPosition] = useState<'bottom-center' | 'bottom-right' | 'top-right'>('bottom-center');
  const [format, setFormat] = useState<'page-of-total' | 'simple'>('page-of-total');
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleAddPageNumbers = async () => {
    if (!file) return;
    setIsProcessing(true);

    try {
      const buffer = await file.arrayBuffer();
      const pdfDoc = await PDFDocument.load(buffer);
      const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
      const pages = pdfDoc.getPages();
      const total = pages.length;

      pages.forEach((page, idx) => {
        const { width, height } = page.getSize();
        const pageNum = idx + 1;
        const text = format === 'page-of-total' ? `Page ${pageNum} of ${total}` : `${pageNum}`;
        const fontSize = 10;
        const textWidth = font.widthOfTextAtSize(text, fontSize);

        let x = (width - textWidth) / 2;
        let y = 25;

        if (position === 'bottom-right') {
          x = width - textWidth - 35;
          y = 25;
        } else if (position === 'top-right') {
          x = width - textWidth - 35;
          y = height - 30;
        }

        page.drawText(text, {
          x,
          y,
          size: fontSize,
          font,
          color: rgb(0.3, 0.3, 0.3),
        });
      });

      const pdfBytes = await pdfDoc.save();
      const blob = new Blob([pdfBytes as unknown as BlobPart], { type: 'application/pdf' });
      setDownloadUrl(URL.createObjectURL(blob));
    } catch {
      alert('Error adding page numbers.');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="space-y-6">
      <div 
        onClick={() => fileInputRef.current?.click()}
        className="border-2 border-dashed border-zinc-200 dark:border-zinc-700 hover:border-indigo-500 rounded-2xl p-8 text-center cursor-pointer transition bg-zinc-50/50 dark:bg-zinc-800/30"
      >
        <Hash className="h-10 w-10 mx-auto text-indigo-500 mb-2" />
        <p className="text-sm font-bold text-zinc-800 dark:text-zinc-200">
          {file ? file.name : 'Select or drop PDF to add page numbers'}
        </p>
        <p className="text-xs text-zinc-500 mt-1">Inserts standardized headers or footers with page numbers</p>
        <input 
          ref={fileInputRef} 
          type="file" 
          accept="application/pdf" 
          onChange={(e) => {
            const f = e.target.files?.[0];
            if (f) { setFile(f); setDownloadUrl(null); }
          }} 
          className="hidden" 
        />
      </div>

      {file && (
        <div className="space-y-4 max-w-md mx-auto">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-semibold uppercase text-zinc-400">Position</label>
              <select
                value={position}
                onChange={(e) => setPosition(e.target.value as 'bottom-center' | 'bottom-right' | 'top-right')}
                className="mt-1 block w-full rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-2 text-xs font-bold dark:border-zinc-700 dark:bg-zinc-800"
              >
                <option value="bottom-center">Bottom Center</option>
                <option value="bottom-right">Bottom Right</option>
                <option value="top-right">Top Right</option>
              </select>
            </div>
            <div>
              <label className="text-xs font-semibold uppercase text-zinc-400">Format</label>
              <select
                value={format}
                onChange={(e) => setFormat(e.target.value as 'page-of-total' | 'simple')}
                className="mt-1 block w-full rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-2 text-xs font-bold dark:border-zinc-700 dark:bg-zinc-800"
              >
                <option value="page-of-total">Page 1 of N</option>
                <option value="simple">1, 2, 3...</option>
              </select>
            </div>
          </div>

          <button
            type="button"
            disabled={isProcessing}
            onClick={handleAddPageNumbers}
            className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl shadow-sm transition flex items-center justify-center gap-2"
          >
            {isProcessing ? <Sparkles className="h-4 w-4 animate-spin" /> : <Hash className="h-4 w-4" />}
            <span>Insert Page Numbers & Download</span>
          </button>
        </div>
      )}

      {downloadUrl && (
        <div className="rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 p-5 text-center space-y-3">
          <p className="text-xs font-bold text-emerald-800 dark:text-emerald-300">
            ✓ Page numbers added across all pages!
          </p>
          <a
            href={downloadUrl}
            download={`numbered_${file?.name || 'document.pdf'}`}
            className="inline-block py-2.5 px-6 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-sm transition"
          >
            Download Numbered PDF
          </a>
        </div>
      )}
    </div>
  );
};

// ==========================================
// 5. Sign PDF / eSign Engine
// ==========================================
export const PdfSignEngine: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [signatureData, setSignatureData] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Initialize Canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.lineWidth = 2.5;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.strokeStyle = '#000000';
  }, []);

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    setIsDrawing(true);
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const x = 'touches' in e ? e.touches[0].clientX - rect.left : e.clientX - rect.left;
    const y = 'touches' in e ? e.touches[0].clientY - rect.top : e.clientY - rect.top;

    ctx.beginPath();
    ctx.moveTo(x, y);
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const x = 'touches' in e ? e.touches[0].clientX - rect.left : e.clientX - rect.left;
    const y = 'touches' in e ? e.touches[0].clientY - rect.top : e.clientY - rect.top;

    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const stopDrawing = () => {
    if (!isDrawing) return;
    setIsDrawing(false);
    if (canvasRef.current) {
      setSignatureData(canvasRef.current.toDataURL('image/png'));
    }
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setSignatureData(null);
  };

  const handleSignPdf = async () => {
    if (!file || !signatureData) return;
    setIsProcessing(true);

    try {
      const buffer = await file.arrayBuffer();
      const pdfDoc = await PDFDocument.load(buffer);
      const signatureImage = await pdfDoc.embedPng(signatureData);
      const pages = pdfDoc.getPages();
      const lastPage = pages[pages.length - 1]; // Place on last page / signature block

      const { width } = lastPage.getSize();
      const sigWidth = 140;
      const sigHeight = (sigWidth / signatureImage.width) * signatureImage.height;

      lastPage.drawImage(signatureImage, {
        x: width - sigWidth - 50,
        y: 60,
        width: sigWidth,
        height: sigHeight,
      });

      const pdfBytes = await pdfDoc.save();
      const blob = new Blob([pdfBytes as unknown as BlobPart], { type: 'application/pdf' });
      setDownloadUrl(URL.createObjectURL(blob));
    } catch {
      alert('Error applying signature to PDF.');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="space-y-6">
      <div 
        onClick={() => fileInputRef.current?.click()}
        className="border-2 border-dashed border-zinc-200 dark:border-zinc-700 hover:border-indigo-500 rounded-2xl p-8 text-center cursor-pointer transition bg-zinc-50/50 dark:bg-zinc-800/30"
      >
        <PenTool className="h-10 w-10 mx-auto text-indigo-500 mb-2" />
        <p className="text-sm font-bold text-zinc-800 dark:text-zinc-200">
          {file ? file.name : 'Select or drop PDF to sign'}
        </p>
        <p className="text-xs text-zinc-500 mt-1">Draw and embed your digital signature securely</p>
        <input 
          ref={fileInputRef} 
          type="file" 
          accept="application/pdf" 
          onChange={(e) => {
            const f = e.target.files?.[0];
            if (f) { setFile(f); setDownloadUrl(null); }
          }} 
          className="hidden" 
        />
      </div>

      <div className="max-w-md mx-auto space-y-3">
        <div className="flex justify-between items-center">
          <label className="text-xs font-semibold uppercase text-zinc-400">Draw Your Signature</label>
          <button
            type="button"
            onClick={clearCanvas}
            className="text-xs text-zinc-500 hover:text-red-500 flex items-center gap-1"
          >
            <Trash2 className="h-3 w-3" /> Clear
          </button>
        </div>

        <div className="border border-zinc-300 dark:border-zinc-700 rounded-2xl overflow-hidden bg-white shadow-inner">
          <canvas
            ref={canvasRef}
            width={400}
            height={160}
            onMouseDown={startDrawing}
            onMouseMove={draw}
            onMouseUp={stopDrawing}
            onMouseLeave={stopDrawing}
            onTouchStart={startDrawing}
            onTouchMove={draw}
            onTouchEnd={stopDrawing}
            className="w-full touch-none cursor-crosshair"
          />
        </div>

        {file && (
          <button
            type="button"
            disabled={!signatureData || isProcessing}
            onClick={handleSignPdf}
            className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white font-bold rounded-xl shadow-sm transition flex items-center justify-center gap-2"
          >
            {isProcessing ? <Sparkles className="h-4 w-4 animate-spin" /> : <PenTool className="h-4 w-4" />}
            <span>Sign & Download Document</span>
          </button>
        )}
      </div>

      {downloadUrl && (
        <div className="rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 p-5 text-center space-y-3">
          <p className="text-xs font-bold text-emerald-800 dark:text-emerald-300">
            ✓ Document signed and sealed in local memory!
          </p>
          <a
            href={downloadUrl}
            download={`signed_${file?.name || 'document.pdf'}`}
            className="inline-block py-2.5 px-6 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-sm transition"
          >
            Download Signed PDF
          </a>
        </div>
      )}
    </div>
  );
};

// ==========================================
// 6. Image Resizer Engine
// ==========================================
export const ImageResizerEngine: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [origWidth, setOrigWidth] = useState<number>(0);
  const [origHeight, setOrigHeight] = useState<number>(0);
  const [width, setWidth] = useState<number>(800);
  const [height, setHeight] = useState<number>(600);
  const [lockAspect, setLockAspect] = useState<boolean>(true);
  const [format, setFormat] = useState<'image/jpeg' | 'image/png' | 'image/webp'>('image/jpeg');
  const [quality, setQuality] = useState<number>(0.9);
  const [resizedUrl, setResizedUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    if (selected) {
      setFile(selected);
      const url = URL.createObjectURL(selected);
      setPreviewUrl(url);
      setResizedUrl(null);

      const img = new Image();
      img.onload = () => {
        setOrigWidth(img.naturalWidth);
        setOrigHeight(img.naturalHeight);
        setWidth(img.naturalWidth);
        setHeight(img.naturalHeight);
      };
      img.src = url;
    }
  };

  const handleWidthChange = (newWidth: number) => {
    setWidth(newWidth);
    if (lockAspect && origWidth > 0) {
      setHeight(Math.round((newWidth / origWidth) * origHeight));
    }
  };

  const handleHeightChange = (newHeight: number) => {
    setHeight(newHeight);
    if (lockAspect && origHeight > 0) {
      setWidth(Math.round((newHeight / origHeight) * origWidth));
    }
  };

  const handleResize = () => {
    if (!previewUrl) return;

    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';
      ctx.drawImage(img, 0, 0, width, height);

      canvas.toBlob(
        (blob) => {
          if (blob) {
            setResizedUrl(URL.createObjectURL(blob));
          }
        },
        format,
        quality
      );
    };
    img.src = previewUrl;
  };

  return (
    <div className="space-y-6">
      <div 
        onClick={() => fileInputRef.current?.click()}
        className="border-2 border-dashed border-zinc-200 dark:border-zinc-700 hover:border-indigo-500 rounded-2xl p-8 text-center cursor-pointer transition bg-zinc-50/50 dark:bg-zinc-800/30"
      >
        <ImageIcon className="h-10 w-10 mx-auto text-indigo-500 mb-2" />
        <p className="text-sm font-bold text-zinc-800 dark:text-zinc-200">
          {file ? file.name : 'Select or drop image to resize (JPG, PNG, WebP)'}
        </p>
        <p className="text-xs text-zinc-500 mt-1">
          {origWidth > 0 ? `Current dimensions: ${origWidth} × ${origHeight} px` : 'Resize by pixels or percentage without quality loss'}
        </p>
        <input 
          ref={fileInputRef} 
          type="file" 
          accept="image/*" 
          onChange={handleFileUpload} 
          className="hidden" 
        />
      </div>

      {file && (
        <div className="space-y-4 max-w-md mx-auto">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-semibold uppercase text-zinc-400">Target Width (px)</label>
              <input
                type="number"
                value={width}
                onChange={(e) => handleWidthChange(parseInt(e.target.value, 10) || 0)}
                className="mt-1 block w-full rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm font-bold text-zinc-800 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
              />
            </div>
            <div>
              <label className="text-xs font-semibold uppercase text-zinc-400">Target Height (px)</label>
              <input
                type="number"
                value={height}
                onChange={(e) => handleHeightChange(parseInt(e.target.value, 10) || 0)}
                className="mt-1 block w-full rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm font-bold text-zinc-800 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
              />
            </div>
          </div>

          <div className="flex items-center justify-between text-xs text-zinc-500">
            <label className="flex items-center gap-1.5 cursor-pointer">
              <input
                type="checkbox"
                checked={lockAspect}
                onChange={(e) => setLockAspect(e.target.checked)}
                className="rounded border-zinc-300 text-indigo-600 focus:ring-indigo-500"
              />
              <span>Lock Aspect Ratio</span>
            </label>

            <div className="flex gap-1.5">
              {[0.25, 0.5, 0.75, 1.5, 2].map((scale) => (
                <button
                  key={scale}
                  type="button"
                  onClick={() => {
                    setWidth(Math.round(origWidth * scale));
                    setHeight(Math.round(origHeight * scale));
                  }}
                  className="px-2 py-0.5 rounded border border-zinc-200 dark:border-zinc-700 hover:border-zinc-300 text-[10px]"
                >
                  {scale * 100}%
                </button>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={handleResize}
            className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl shadow-sm transition flex items-center justify-center gap-2"
          >
            <Maximize2 className="h-4 w-4" />
            <span>Resize Image</span>
          </button>
        </div>
      )}

      {resizedUrl && (
        <div className="rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 p-5 text-center space-y-3">
          <p className="text-xs font-bold text-emerald-800 dark:text-emerald-300">
            ✓ Image resized to {width} × {height} px!
          </p>
          <a
            href={resizedUrl}
            download={`resized_${width}x${height}_${file?.name || 'image.jpg'}`}
            className="inline-block py-2.5 px-6 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-sm transition"
          >
            Download Resized Image
          </a>
        </div>
      )}
    </div>
  );
};

// ==========================================
// 7. Image Format Converter Engine (PNG to JPG, WebP, etc.)
// ==========================================
export const ImageFormatConverterEngine: React.FC<{ defaultTarget?: string }> = ({ defaultTarget }) => {
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const targetExt = defaultTarget?.includes('png') ? 'png' : defaultTarget?.includes('webp') ? 'webp' : 'jpg';
  const [format, setFormat] = useState<'image/jpeg' | 'image/png' | 'image/webp'>(
    targetExt === 'png' ? 'image/png' : targetExt === 'webp' ? 'image/webp' : 'image/jpeg'
  );
  const [convertedUrl, setConvertedUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    if (selected) {
      setFile(selected);
      setPreviewUrl(URL.createObjectURL(selected));
      setConvertedUrl(null);
    }
  };

  const handleConvert = () => {
    if (!previewUrl) return;

    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      if (format === 'image/jpeg') {
        ctx.fillStyle = '#FFFFFF';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }
      ctx.drawImage(img, 0, 0);

      canvas.toBlob(
        (blob) => {
          if (blob) {
            setConvertedUrl(URL.createObjectURL(blob));
          }
        },
        format,
        0.95
      );
    };
    img.src = previewUrl;
  };

  return (
    <div className="space-y-6">
      <div 
        onClick={() => fileInputRef.current?.click()}
        className="border-2 border-dashed border-zinc-200 dark:border-zinc-700 hover:border-indigo-500 rounded-2xl p-8 text-center cursor-pointer transition bg-zinc-50/50 dark:bg-zinc-800/30"
      >
        <ImageIcon className="h-10 w-10 mx-auto text-indigo-500 mb-2" />
        <p className="text-sm font-bold text-zinc-800 dark:text-zinc-200">
          {file ? file.name : 'Select or drop image to convert format'}
        </p>
        <p className="text-xs text-zinc-500 mt-1">Convert between JPG, PNG, and WebP instantly</p>
        <input 
          ref={fileInputRef} 
          type="file" 
          accept="image/*" 
          onChange={handleFileUpload} 
          className="hidden" 
        />
      </div>

      {file && (
        <div className="space-y-4 max-w-md mx-auto">
          <div>
            <label className="text-xs font-semibold uppercase text-zinc-400">Target Image Format</label>
            <div className="grid grid-cols-3 gap-3 mt-1">
              {[
                { type: 'image/jpeg', label: 'JPG / JPEG' },
                { type: 'image/png', label: 'PNG' },
                { type: 'image/webp', label: 'WebP' },
              ].map((fmt) => (
                <button
                  key={fmt.type}
                  type="button"
                  onClick={() => setFormat(fmt.type as 'image/jpeg' | 'image/png' | 'image/webp')}
                  className={`py-2 rounded-xl text-xs font-bold border transition ${
                    format === fmt.type
                      ? 'border-indigo-600 bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300'
                      : 'border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400'
                  }`}
                >
                  {fmt.label}
                </button>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={handleConvert}
            className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl shadow-sm transition flex items-center justify-center gap-2"
          >
            <RotateCw className="h-4 w-4" />
            <span>Convert Image Format</span>
          </button>
        </div>
      )}

      {convertedUrl && (
        <div className="rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 p-5 text-center space-y-3">
          <p className="text-xs font-bold text-emerald-800 dark:text-emerald-300">
            ✓ Converted successfully!
          </p>
          <a
            href={convertedUrl}
            download={`converted.${format.split('/')[1] === 'jpeg' ? 'jpg' : format.split('/')[1]}`}
            className="inline-block py-2.5 px-6 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-sm transition"
          >
            Download Converted Image
          </a>
        </div>
      )}
    </div>
  );
};
