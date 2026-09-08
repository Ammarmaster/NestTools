'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import QRCode from 'qrcode';
import { 
  Download, 
  Plus, 
  Trash2, 
  Printer, 
  QrCode, 
  Barcode, 
  Minimize2, 
  FileCode, 
  ShieldCheck, 
  Eye, 
  EyeOff,
  Percent,
  RefreshCw,
  Copy,
  Check
} from 'lucide-react';

// ==========================================
// 7. Invoice Generator Engine
// ==========================================
interface InvoiceItem {
  id: string;
  description: string;
  quantity: number;
  rate: number;
}

export const InvoiceGeneratorEngine: React.FC = () => {
  const [currency, setCurrency] = useState('$');
  const [invoiceNumber, setInvoiceNumber] = useState('INV-2026-001');
  const [invoiceDate, setInvoiceDate] = useState('2026-09-08');
  const [dueDate, setDueDate] = useState('2026-09-22');
  const [fromName, setFromName] = useState('Acme Studio');
  const [fromEmail, setFromEmail] = useState('billing@acmestudio.com');
  const [fromAddress, setFromAddress] = useState('100 Innovation Way, Suite 400\nSan Francisco, CA 94107');
  const [toName, setToName] = useState('Client Corporation');
  const [toEmail, setToEmail] = useState('accounts@clientcorp.com');
  const [toAddress, setToAddress] = useState('500 Enterprise Blvd\nAustin, TX 78701');
  const [items, setItems] = useState<InvoiceItem[]>([
    { id: '1', description: 'Web Application Design & Architecture', quantity: 1, rate: 2500 },
    { id: '2', description: 'Frontend Development (Next.js & Tailwind)', quantity: 40, rate: 75 },
    { id: '3', description: 'Cloud Setup & CI/CD Deployment', quantity: 1, rate: 800 },
  ]);
  const [taxRate, setTaxRate] = useState<number>(8);
  const [discountRate, setDiscountRate] = useState<number>(5);
  const [notes, setNotes] = useState('Thank you for your business! Payment due within 14 days via bank wire or credit card.');

  const addItem = () => {
    setItems((prev) => [
      ...prev,
      { id: Math.random().toString(36).substring(7), description: 'New Service Item', quantity: 1, rate: 100 },
    ]);
  };

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  };

  const updateItem = (id: string, field: keyof InvoiceItem, value: string | number) => {
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, [field]: value } : item))
    );
  };

  const subtotal = items.reduce((acc, item) => acc + (Number(item.quantity) || 0) * (Number(item.rate) || 0), 0);
  const discountAmount = subtotal * ((Number(discountRate) || 0) / 100);
  const taxableAmount = subtotal - discountAmount;
  const taxAmount = taxableAmount * ((Number(taxRate) || 0) / 100);
  const total = taxableAmount + taxAmount;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-6">
      {/* Action Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400">Currency</span>
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            className="rounded-lg border border-zinc-200 bg-white px-2.5 py-1 text-xs font-semibold text-zinc-800 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200"
          >
            <option value="$">USD ($)</option>
            <option value="€">EUR (€)</option>
            <option value="£">GBP (£)</option>
            <option value="₹">INR (₹)</option>
            <option value="CA$">CAD (CA$)</option>
            <option value="A$">AUD (A$)</option>
          </select>
        </div>

        <button
          type="button"
          onClick={handlePrint}
          className="flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-2 text-xs font-semibold text-white shadow-xs hover:bg-indigo-700"
        >
          <Printer className="h-4 w-4" />
          <span>Print / Save as PDF</span>
        </button>
      </div>

      {/* Printable Invoice Container */}
      <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 print:border-none print:shadow-none print:p-0">
        {/* Top Invoice Banner */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between border-b border-zinc-100 pb-6 dark:border-zinc-800">
          <div>
            <h2 className="text-2xl font-black tracking-tight text-zinc-900 dark:text-zinc-50">INVOICE</h2>
            <div className="mt-2 space-y-1">
              <input
                type="text"
                value={fromName}
                onChange={(e) => setFromName(e.target.value)}
                placeholder="Your Business Name"
                className="block text-base font-bold text-zinc-800 focus:outline-hidden dark:text-zinc-100"
              />
              <input
                type="email"
                value={fromEmail}
                onChange={(e) => setFromEmail(e.target.value)}
                placeholder="billing@example.com"
                className="block text-xs text-zinc-500 focus:outline-hidden"
              />
              <textarea
                value={fromAddress}
                onChange={(e) => setFromAddress(e.target.value)}
                placeholder="Company Address"
                rows={2}
                className="block w-64 text-xs text-zinc-500 focus:outline-hidden"
              />
            </div>
          </div>

          <div className="sm:text-right space-y-2">
            <div>
              <label className="text-[10px] font-semibold uppercase tracking-wider text-zinc-400">Invoice #</label>
              <input
                type="text"
                value={invoiceNumber}
                onChange={(e) => setInvoiceNumber(e.target.value)}
                className="block rounded-md border border-zinc-200 px-2 py-1 text-xs font-mono font-bold sm:ml-auto dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200"
              />
            </div>
            <div className="grid grid-cols-2 gap-2 text-left sm:text-right">
              <div>
                <label className="text-[10px] text-zinc-400">Invoice Date</label>
                <input
                  type="date"
                  value={invoiceDate}
                  onChange={(e) => setInvoiceDate(e.target.value)}
                  className="block rounded-md border border-zinc-200 px-1.5 py-0.5 text-xs dark:border-zinc-700 dark:bg-zinc-800"
                />
              </div>
              <div>
                <label className="text-[10px] text-zinc-400">Due Date</label>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="block rounded-md border border-zinc-200 px-1.5 py-0.5 text-xs dark:border-zinc-700 dark:bg-zinc-800"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bill To */}
        <div className="my-6">
          <label className="text-[10px] font-semibold uppercase tracking-wider text-zinc-400">Bill To:</label>
          <div className="mt-1 space-y-1">
            <input
              type="text"
              value={toName}
              onChange={(e) => setToName(e.target.value)}
              placeholder="Client / Company Name"
              className="block font-semibold text-zinc-800 focus:outline-hidden dark:text-zinc-200"
            />
            <input
              type="email"
              value={toEmail}
              onChange={(e) => setToEmail(e.target.value)}
              placeholder="client@example.com"
              className="block text-xs text-zinc-500 focus:outline-hidden"
            />
            <textarea
              value={toAddress}
              onChange={(e) => setToAddress(e.target.value)}
              placeholder="Client Address"
              rows={2}
              className="block w-64 text-xs text-zinc-500 focus:outline-hidden"
            />
          </div>
        </div>

        {/* Itemized Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-zinc-200 bg-zinc-50/70 text-zinc-500 dark:border-zinc-800 dark:bg-zinc-800/50">
                <th className="py-2.5 px-3">Description</th>
                <th className="py-2.5 px-3 w-20 text-center">Qty</th>
                <th className="py-2.5 px-3 w-28 text-right">Rate</th>
                <th className="py-2.5 px-3 w-28 text-right">Amount</th>
                <th className="py-2.5 px-2 w-10 print:hidden"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
              {items.map((item) => (
                <tr key={item.id} className="group">
                  <td className="py-2 px-3">
                    <input
                      type="text"
                      value={item.description}
                      onChange={(e) => updateItem(item.id, 'description', e.target.value)}
                      className="w-full bg-transparent font-medium text-zinc-800 focus:outline-hidden dark:text-zinc-200"
                    />
                  </td>
                  <td className="py-2 px-3 text-center">
                    <input
                      type="number"
                      value={item.quantity}
                      onChange={(e) => updateItem(item.id, 'quantity', parseFloat(e.target.value) || 0)}
                      className="w-16 rounded-md border border-zinc-200 px-1 text-center dark:border-zinc-700 dark:bg-zinc-800"
                    />
                  </td>
                  <td className="py-2 px-3 text-right">
                    <input
                      type="number"
                      value={item.rate}
                      onChange={(e) => updateItem(item.id, 'rate', parseFloat(e.target.value) || 0)}
                      className="w-24 rounded-md border border-zinc-200 px-1 text-right dark:border-zinc-700 dark:bg-zinc-800"
                    />
                  </td>
                  <td className="py-2 px-3 text-right font-mono font-semibold text-zinc-800 dark:text-zinc-200">
                    {currency}{((item.quantity || 0) * (item.rate || 0)).toLocaleString('en-US', { minimumFractionDigits: 2 })}
                  </td>
                  <td className="py-2 px-2 text-center print:hidden">
                    <button
                      type="button"
                      onClick={() => removeItem(item.id)}
                      className="text-zinc-300 hover:text-rose-500"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <button
          type="button"
          onClick={addItem}
          className="mt-3 flex items-center gap-1.5 rounded-lg border border-dashed border-zinc-300 px-3 py-1.5 text-xs font-semibold text-indigo-600 hover:bg-indigo-50 dark:border-zinc-700 dark:text-indigo-400 dark:hover:bg-indigo-950/40 print:hidden"
        >
          <Plus className="h-3.5 w-3.5" />
          <span>Add Line Item</span>
        </button>

        {/* Totals Calculation */}
        <div className="mt-8 flex flex-col sm:flex-row justify-between gap-6 border-t border-zinc-100 pt-6 dark:border-zinc-800">
          <div className="sm:max-w-xs space-y-2">
            <label className="text-[10px] font-semibold uppercase tracking-wider text-zinc-400">Notes & Payment Instructions</label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={3}
              className="w-full rounded-lg border border-zinc-200 p-2 text-xs text-zinc-600 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
            />
          </div>

          <div className="w-full sm:w-64 space-y-2 text-xs">
            <div className="flex justify-between text-zinc-600 dark:text-zinc-400">
              <span>Subtotal:</span>
              <span className="font-mono font-semibold">{currency}{subtotal.toFixed(2)}</span>
            </div>
            <div className="flex items-center justify-between text-zinc-600 dark:text-zinc-400">
              <span className="flex items-center gap-1">
                Discount:
                <input
                  type="number"
                  value={discountRate}
                  onChange={(e) => setDiscountRate(parseFloat(e.target.value) || 0)}
                  className="w-10 rounded-md border border-zinc-200 px-1 text-center text-[10px] dark:border-zinc-700 dark:bg-zinc-800"
                />%
              </span>
              <span className="font-mono text-emerald-600">-{currency}{discountAmount.toFixed(2)}</span>
            </div>
            <div className="flex items-center justify-between text-zinc-600 dark:text-zinc-400">
              <span className="flex items-center gap-1">
                Tax:
                <input
                  type="number"
                  value={taxRate}
                  onChange={(e) => setTaxRate(parseFloat(e.target.value) || 0)}
                  className="w-10 rounded-md border border-zinc-200 px-1 text-center text-[10px] dark:border-zinc-700 dark:bg-zinc-800"
                />%
              </span>
              <span className="font-mono">{currency}{taxAmount.toFixed(2)}</span>
            </div>
            <div className="flex justify-between border-t border-zinc-200 pt-2 text-base font-bold text-zinc-900 dark:border-zinc-700 dark:text-zinc-50">
              <span>Total Due:</span>
              <span className="font-mono text-indigo-600 dark:text-indigo-400">{currency}{total.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ==========================================
// 8. QR Code Generator Engine
// ==========================================
export const QrCodeGeneratorEngine: React.FC = () => {
  const [text, setText] = useState('https://toolnest.com');
  const [fgColor, setFgColor] = useState('#1e1b4b');
  const [bgColor, setBgColor] = useState('#ffffff');
  const [size, setSize] = useState<number>(300);
  const [errorLevel, setErrorLevel] = useState<'L' | 'M' | 'Q' | 'H'>('M');
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const generateCode = useCallback(async () => {
    if (!canvasRef.current || !text) return;
    try {
      await QRCode.toCanvas(canvasRef.current, text, {
        width: size,
        margin: 2,
        color: {
          dark: fgColor,
          light: bgColor,
        },
        errorCorrectionLevel: errorLevel,
      });
    } catch {
      // Ignored if text too long
    }
  }, [text, fgColor, bgColor, size, errorLevel]);

  useEffect(() => {
    generateCode();
  }, [generateCode]);

  const handleDownload = () => {
    if (!canvasRef.current) return;
    const url = canvasRef.current.toDataURL('image/png');
    const a = document.createElement('a');
    a.href = url;
    a.download = `QRCode_${Date.now()}.png`;
    a.click();
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-4 rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
          <div>
            <label className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
              Content or URL to Encode
            </label>
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="https://example.com or Wi-Fi password"
              className="mt-1 block w-full rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm text-zinc-800 focus:border-indigo-500 focus:outline-hidden dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
            />
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div>
              <label className="text-[10px] font-semibold uppercase tracking-wider text-zinc-400">Foreground</label>
              <input
                type="color"
                value={fgColor}
                onChange={(e) => setFgColor(e.target.value)}
                className="mt-1 block h-9 w-full rounded-lg cursor-pointer border border-zinc-200 dark:border-zinc-700"
              />
            </div>
            <div>
              <label className="text-[10px] font-semibold uppercase tracking-wider text-zinc-400">Background</label>
              <input
                type="color"
                value={bgColor}
                onChange={(e) => setBgColor(e.target.value)}
                className="mt-1 block h-9 w-full rounded-lg cursor-pointer border border-zinc-200 dark:border-zinc-700"
              />
            </div>
            <div>
              <label className="text-[10px] font-semibold uppercase tracking-wider text-zinc-400">Size (px)</label>
              <select
                value={size}
                onChange={(e) => setSize(Number(e.target.value))}
                className="mt-1 block w-full rounded-lg border border-zinc-200 bg-zinc-50 px-2 py-2 text-xs text-zinc-800 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200"
              >
                <option value={200}>200 x 200</option>
                <option value={300}>300 x 300</option>
                <option value={500}>500 x 500 (High-Res)</option>
              </select>
            </div>
            <div>
              <label className="text-[10px] font-semibold uppercase tracking-wider text-zinc-400">Error Correction</label>
              <select
                value={errorLevel}
                onChange={(e) => setErrorLevel(e.target.value as 'L' | 'M' | 'Q' | 'H')}
                className="mt-1 block w-full rounded-lg border border-zinc-200 bg-zinc-50 px-2 py-2 text-xs text-zinc-800 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200"
              >
                <option value="L">Low (7%)</option>
                <option value="M">Medium (15%)</option>
                <option value="Q">Quartile (25%)</option>
                <option value="H">High (30%)</option>
              </select>
            </div>
          </div>
        </div>

        {/* QR Code Preview */}
        <div className="flex flex-col items-center justify-center rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
          <canvas ref={canvasRef} className="rounded-xl shadow-xs" />
          <button
            type="button"
            onClick={handleDownload}
            className="mt-4 flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-2 text-xs font-semibold text-white hover:bg-indigo-700"
          >
            <Download className="h-4 w-4" />
            <span>Download PNG</span>
          </button>
        </div>
      </div>
    </div>
  );
};

// ==========================================
// 9. Barcode Generator Engine
// ==========================================
export const BarcodeGeneratorEngine: React.FC = () => {
  const [code, setCode] = useState('INV-2026-X89');
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const drawBarcode = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Render simple Code128-style optical bars
    ctx.fillStyle = '#000000';
    const startX = 30;
    const height = 90;
    let currX = startX;

    // Start pattern
    [2, 1, 1, 2].forEach((w) => {
      ctx.fillRect(currX, 20, w * 2, height);
      currX += w * 2 + 2;
    });

    for (let i = 0; i < code.length; i++) {
      const charCode = code.charCodeAt(i);
      const b1 = (charCode % 3) + 1;
      const b2 = ((charCode >> 2) % 3) + 1;
      const b3 = ((charCode >> 4) % 3) + 1;

      ctx.fillRect(currX, 20, b1 * 2, height);
      currX += b1 * 2 + 2;
      ctx.fillRect(currX, 20, b2 * 2, height);
      currX += b2 * 2 + 2;
      ctx.fillRect(currX, 20, b3 * 2, height);
      currX += b3 * 2 + 3;
    }

    // Stop pattern
    [2, 2, 1, 1].forEach((w) => {
      ctx.fillRect(currX, 20, w * 2, height);
      currX += w * 2 + 2;
    });

    // Human readable text underneath
    ctx.font = '14px monospace';
    ctx.textAlign = 'center';
    ctx.fillText(code, canvas.width / 2, 135);
  }, [code]);

  useEffect(() => {
    drawBarcode();
  }, [drawBarcode]);

  const handleDownload = () => {
    if (!canvasRef.current) return;
    const url = canvasRef.current.toDataURL('image/png');
    const a = document.createElement('a');
    a.href = url;
    a.download = `Barcode_${code}.png`;
    a.click();
  };

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
        <label className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
          Enter SKU, Code, or Text (Letters, Numbers, Hyphens)
        </label>
        <input
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value.toUpperCase())}
          className="mt-2 block w-full max-w-md rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm font-mono font-bold text-zinc-800 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200"
        />

        <div className="mt-6 flex flex-col items-center justify-center p-4 border border-zinc-100 rounded-xl bg-zinc-50/50 dark:border-zinc-800 dark:bg-zinc-950/40">
          <canvas ref={canvasRef} width={420} height={160} className="rounded-lg shadow-2xs bg-white" />
          <button
            type="button"
            onClick={handleDownload}
            className="mt-4 flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-2 text-xs font-semibold text-white hover:bg-indigo-700"
          >
            <Download className="h-4 w-4" />
            <span>Download Barcode (PNG)</span>
          </button>
        </div>
      </div>
    </div>
  );
};

// ==========================================
// 10. Image Compressor Engine
// ==========================================
export const ImageCompressorEngine: React.FC = () => {
  const [originalFile, setOriginalFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string>('');
  const [quality, setQuality] = useState<number>(75);
  const [maxDimension, setMaxDimension] = useState<number>(1920);
  const [compressedBlob, setCompressedBlob] = useState<Blob | null>(null);
  const [isCompressing, setIsCompressing] = useState(false);

  const compressImage = useCallback(async (file: File, q: number, maxDim: number) => {
    setIsCompressing(true);
    const img = new Image();
    img.src = URL.createObjectURL(file);
    img.onload = () => {
      let width = img.width;
      let height = img.height;

      if (width > maxDim || height > maxDim) {
        if (width > height) {
          height = Math.round((height * maxDim) / width);
          width = maxDim;
        } else {
          width = Math.round((width * maxDim) / height);
          height = maxDim;
        }
      }

      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.drawImage(img, 0, 0, width, height);
        canvas.toBlob(
          (blob) => {
            setCompressedBlob(blob);
            setIsCompressing(false);
          },
          file.type.includes('png') ? 'image/webp' : 'image/jpeg',
          q / 100
        );
      }
    };
  }, []);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setOriginalFile(file);
    setPreviewUrl(URL.createObjectURL(file));
    compressImage(file, quality, maxDimension);
  };

  const handleDownload = () => {
    if (!compressedBlob) return;
    const url = URL.createObjectURL(compressedBlob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `compressed_${originalFile?.name.replace(/\.[^/.]+$/, '')}.jpg`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
        <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-400">
          Upload Image to Compress (JPG, PNG, WebP)
        </label>
        <input
          type="file"
          accept="image/*"
          onChange={handleFileUpload}
          className="mt-2 block w-full text-xs text-zinc-500 file:mr-4 file:rounded-xl file:border-0 file:bg-indigo-50 file:px-4 file:py-2 file:text-xs file:font-semibold file:text-indigo-600"
        />

        {originalFile && (
          <div className="mt-6 space-y-4 border-t border-zinc-100 pt-4 dark:border-zinc-800">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <div className="flex justify-between text-xs text-zinc-600 dark:text-zinc-300">
                  <span>Quality</span>
                  <strong>{quality}%</strong>
                </div>
                <input
                  type="range"
                  min={10}
                  max={100}
                  value={quality}
                  onChange={(e) => {
                    const q = Number(e.target.value);
                    setQuality(q);
                    compressImage(originalFile, q, maxDimension);
                  }}
                  className="mt-2 w-full"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs text-zinc-600 dark:text-zinc-300">
                  <span>Max Dimension</span>
                  <strong>{maxDimension}px</strong>
                </div>
                <select
                  value={maxDimension}
                  onChange={(e) => {
                    const d = Number(e.target.value);
                    setMaxDimension(d);
                    compressImage(originalFile, quality, d);
                  }}
                  className="mt-1 block w-full rounded-lg border border-zinc-200 bg-zinc-50 px-2.5 py-1 text-xs text-zinc-800 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200"
                >
                  <option value={1080}>1080px (Standard Web)</option>
                  <option value={1920}>1920px (Full HD)</option>
                  <option value={3840}>3840px (4K Original)</option>
                </select>
              </div>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-3 rounded-xl bg-zinc-50 p-4 text-center dark:bg-zinc-800/50">
              <div>
                <span className="block text-[10px] uppercase text-zinc-400">Original Size</span>
                <span className="font-mono text-sm font-bold text-zinc-800 dark:text-zinc-200">
                  {(originalFile.size / 1024).toFixed(1)} KB
                </span>
              </div>
              <div>
                <span className="block text-[10px] uppercase text-zinc-400">Compressed Size</span>
                <span className="font-mono text-sm font-bold text-indigo-600 dark:text-indigo-400">
                  {compressedBlob ? `${(compressedBlob.size / 1024).toFixed(1)} KB` : '...'}
                </span>
              </div>
              <div>
                <span className="block text-[10px] uppercase text-zinc-400">Space Saved</span>
                <span className="font-mono text-sm font-bold text-emerald-600">
                  {compressedBlob
                    ? `${Math.max(0, Math.round(((originalFile.size - compressedBlob.size) / originalFile.size) * 100))}%`
                    : '...'}
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2">
              <span className="text-xs text-zinc-500">
                100% Client-side. No photo leaves your browser.
              </span>
              <button
                type="button"
                onClick={handleDownload}
                disabled={isCompressing || !compressedBlob}
                className="flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-2 text-xs font-semibold text-white hover:bg-indigo-700 disabled:opacity-50"
              >
                <Download className="h-4 w-4" />
                <span>Download Compressed Image</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// ==========================================
// 11. SVG to PNG Converter Engine
// ==========================================
export const SvgToPngEngine: React.FC = () => {
  const [svgContent, setSvgContent] = useState(
    `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 24 24" fill="none" stroke="#4f46e5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\n  <circle cx="12" cy="12" r="10"/>\n  <polygon points="12 8 8 12 12 16 16 12 12 8"/>\n</svg>`
  );
  const [scale, setScale] = useState<number>(2);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      setSvgContent(event.target?.result as string);
    };
    reader.readAsText(file);
  };

  const handleConvert = () => {
    const blob = new Blob([svgContent], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.width * scale || 400;
      canvas.height = img.height * scale || 400;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        const pngUrl = canvas.toDataURL('image/png');
        const a = document.createElement('a');
        a.href = pngUrl;
        a.download = `converted_${Date.now()}.png`;
        a.click();
      }
      URL.revokeObjectURL(url);
    };
    img.src = url;
  };

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
        <div className="flex items-center justify-between">
          <label className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
            Paste SVG Markup or Upload .svg File
          </label>
          <input
            type="file"
            accept=".svg"
            onChange={handleFileUpload}
            className="text-xs text-zinc-500"
          />
        </div>

        <textarea
          value={svgContent}
          onChange={(e) => setSvgContent(e.target.value)}
          rows={6}
          className="mt-3 w-full rounded-xl border border-zinc-200 bg-zinc-50 p-3 font-mono text-xs text-zinc-800 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200"
        />

        <div className="mt-4 flex items-center justify-between border-t border-zinc-100 pt-4 dark:border-zinc-800">
          <div className="flex items-center gap-2">
            <span className="text-xs text-zinc-600 dark:text-zinc-400">Resolution Scale:</span>
            <select
              value={scale}
              onChange={(e) => setScale(Number(e.target.value))}
              className="rounded-lg border border-zinc-200 bg-zinc-50 px-2 py-1 text-xs text-zinc-800 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200"
            >
              <option value={1}>1x (Original)</option>
              <option value={2}>2x (High-DPI / Retina)</option>
              <option value={4}>4x (Ultra HD)</option>
            </select>
          </div>

          <button
            type="button"
            onClick={handleConvert}
            className="flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-2 text-xs font-semibold text-white hover:bg-indigo-700"
          >
            <Download className="h-4 w-4" />
            <span>Convert & Download PNG</span>
          </button>
        </div>
      </div>
    </div>
  );
};

// ==========================================
// 12. Password Strength Checker Engine
// ==========================================
export const PasswordStrengthCheckerEngine: React.FC = () => {
  const [password, setPassword] = useState('My$ecureP@ssw0rd!2026');
  const [showPassword, setShowPassword] = useState(false);

  // Entropy calculation
  let poolSize = 0;
  if (/[a-z]/.test(password)) poolSize += 26;
  if (/[A-Z]/.test(password)) poolSize += 26;
  if (/[0-9]/.test(password)) poolSize += 10;
  if (/[^a-zA-Z0-9]/.test(password)) poolSize += 33;

  const entropy = password.length > 0 && poolSize > 0 
    ? Math.round(password.length * Math.log2(poolSize))
    : 0;

  // Strength classification
  let strengthLabel = 'Very Weak';
  let strengthColor = 'bg-rose-500 text-rose-500';
  let crackTime = 'Instantly';

  if (entropy > 80) {
    strengthLabel = 'Extremely Strong';
    strengthColor = 'bg-emerald-500 text-emerald-500';
    crackTime = 'Centuries (Billions of years)';
  } else if (entropy >= 60) {
    strengthLabel = 'Strong';
    strengthColor = 'bg-emerald-500 text-emerald-500';
    crackTime = 'Decades to Centuries';
  } else if (entropy >= 45) {
    strengthLabel = 'Moderate';
    strengthColor = 'bg-amber-500 text-amber-500';
    crackTime = 'Days to Months';
  } else if (entropy >= 28) {
    strengthLabel = 'Weak';
    strengthColor = 'bg-orange-500 text-orange-500';
    crackTime = 'Minutes to Hours';
  }

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
        <label className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
          Enter Password to Evaluate Privately
        </label>
        <div className="relative mt-2">
          <input
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm font-mono text-zinc-800 focus:border-indigo-500 focus:outline-hidden dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-3 text-zinc-400 hover:text-zinc-600"
          >
            {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          </button>
        </div>

        {/* Strength Meter Bar */}
        <div className="mt-4">
          <div className="h-2 w-full rounded-full bg-zinc-100 dark:bg-zinc-800 overflow-hidden">
            <div
              className={`h-full transition-all duration-300 ${strengthColor.split(' ')[0]}`}
              style={{ width: `${Math.min(100, (entropy / 90) * 100)}%` }}
            />
          </div>
          <div className="mt-2 flex justify-between text-xs">
            <span className="font-semibold text-zinc-700 dark:text-zinc-300">
              Strength: <span className={strengthColor.split(' ')[1]}>{strengthLabel}</span>
            </span>
            <span className="font-mono text-zinc-500">{entropy} bits of entropy</span>
          </div>
        </div>

        {/* Security Metrics */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-zinc-100 pt-4 dark:border-zinc-800">
          <div className="rounded-xl bg-zinc-50 p-3 dark:bg-zinc-800/50">
            <span className="block text-[10px] uppercase text-zinc-400">Estimated Crack Time (GPU Cluster)</span>
            <span className="text-sm font-bold text-zinc-800 dark:text-zinc-200">{crackTime}</span>
          </div>
          <div className="rounded-xl bg-zinc-50 p-3 dark:bg-zinc-800/50">
            <span className="block text-[10px] uppercase text-zinc-400">Length & Character Set Pool</span>
            <span className="text-sm font-bold text-zinc-800 dark:text-zinc-200">{password.length} chars ({poolSize} pool)</span>
          </div>
        </div>

        {/* Checklist */}
        <div className="mt-5 space-y-1 text-xs">
          {[
            { label: 'At least 12 characters long', pass: password.length >= 12 },
            { label: 'Includes lowercase letters (a-z)', pass: /[a-z]/.test(password) },
            { label: 'Includes uppercase letters (A-Z)', pass: /[A-Z]/.test(password) },
            { label: 'Includes numbers (0-9)', pass: /[0-9]/.test(password) },
            { label: 'Includes special symbols (!@#$%^&*)', pass: /[^a-zA-Z0-9]/.test(password) },
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <span className={`flex h-4 w-4 items-center justify-center rounded-full text-[10px] ${item.pass ? 'bg-emerald-500 text-white' : 'bg-zinc-200 text-zinc-500'}`}>
                {item.pass ? '✓' : '✗'}
              </span>
              <span className={item.pass ? 'text-zinc-700 dark:text-zinc-300' : 'text-zinc-400'}>
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
