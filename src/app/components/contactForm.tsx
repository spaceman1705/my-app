"use client";

import { useEffect, useRef, useState } from "react";
import { initEmail, sendContactEmail } from "../service/contactService";
import { Send } from "lucide-react";
import { useSnackbar } from "notistack";

export default function ContactForm() {
  const form = useRef<HTMLFormElement | null>(null);
  const [isSending, setIsSending] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    initEmail();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    const name = (form.current.elements.namedItem("name") as HTMLInputElement)?.value;
    const email = (form.current.elements.namedItem("email") as HTMLInputElement)?.value;
    const message = (form.current.elements.namedItem("message") as HTMLTextAreaElement)?.value;

    setIsSending(true);

    try {
      await sendContactEmail({ name, email, message });

      enqueueSnackbar("Pesan berhasil dikirim 🎉", { 
        variant: "success",
        autoHideDuration: 3000,
        anchorOrigin: { vertical: "top", horizontal: "right" },
      });

      form.current.reset();
    } catch (error) {
      console.error("❌ Gagal kirim:", error);
      enqueueSnackbar("Gagal mengirim pesan. Coba lagi nanti.", {
        variant: "error",
        autoHideDuration: 3000,
        anchorOrigin: { vertical: "top", horizontal: "right" },
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div id="contact" className="flex justify-center py-16 px-4 bg-gradient-to-b from-white to-gray-50">
      <form
        ref={form}
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8 border border-gray-100"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Hubungi Saya 📬</h2>

        <div className="flex flex-col gap-5">
          <div>
            <label className="text-gray-700 font-medium mb-1 block">Nama</label>
            <input
              type="text"
              name="name"
              placeholder="Masukkan nama Anda"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
            />
          </div>

          <div>
            <label className="text-gray-700 font-medium mb-1 block">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Masukkan email Anda"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
            />
          </div>

          <div>
            <label className="text-gray-700 font-medium mb-1 block">Pesan</label>
            <textarea
              name="message"
              placeholder="Tulis pesan Anda di sini..."
              rows={4}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={isSending}
            className={`flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium shadow-md transition-all hover:bg-blue-700 hover:shadow-lg ${
              isSending ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {isSending ? "Mengirim..." : "Kirim Pesan"}
            {!isSending && <Send className="w-4 h-4" />}
          </button>
        </div>
      </form>
    </div>
  );
}