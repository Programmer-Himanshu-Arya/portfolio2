'use client';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

export function Footer() {
  return (
    <div className="w-full pb-2 pt-5 text-xs">
      <div className="flex flex-grow flex-col justify-between gap-2 rounded-md bg-muted/50 px-2 py-1 text-muted-foreground md:px-4 md:py-2">
        <div className="flex justify-between">
          <p className="flex gap-2">Made with ❤️ by Himanshu Arya</p>
          <p className="flex gap-5 text-xl">
            <a href="https://github.com/CodeDevArya" target="_blank">
              <FaGithub />
            </a>
            <a href="https://www.instagram.com/aryadevs.io" target="_blank">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/in/code-dev-arya/" target="_blank">
              <FaLinkedin />
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
