import { ContactForm } from './_components/contact-form';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Me | Aryadevs',
  description: 'I am a fullstack software engineer who loves to build things for the web.',
};

export default function Contact() {
  return (
    <main className="bg-background text-foreground md:container sm:mt-[8rem] max-sm:mt-[6rem]">
      <section className="flex h-[calc(100vh-48px)] flex-col items-center justify-center">
        <div className="w-full max-w-3xl rounded-lg border-primary/50 px-6 py-4 md:border-2 md:bg-primary/5">
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
