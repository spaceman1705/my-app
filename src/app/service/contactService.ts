import emailjs from "@emailjs/browser";

// init EmailJS
export const initEmail = () => {
  emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!);
};

// Fungsi kirim email
export const sendContactEmail = async (data: {
  name: string;
  email: string;
  message: string;
}) => {
  try {
    const response = await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
      {
        title: "New Message",
        ...data,
        time: new Date().toLocaleString("id-ID", { timeZone: "Asia/Jakarta" }),
      }
    );

    return response;
  } catch (error) {
    throw error;
  }
};
