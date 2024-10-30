import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';

function Footer() {
  return (
    <footer className="flex flex-col text-white gap-x-12 ">
      <div className="flex py-12 gap-x-12">
        <div className="flex flex-col items-start justify-center w-full gap-x-2">
          <p className="py-3">Product</p>
          <p className="py-3">Pricing</p>
          <p className="py-3">Overview</p>
          <p className="py-3">Overview</p>
          <p className="py-3">Overview</p>
          <p className="py-3">Overview</p>
        </div>
        <div className="flex flex-col items-start justify-center w-full gap-x-2">
          <p className="py-3">Product</p>
          <p className="py-3">Pricing</p>
          <p className="py-3">Overview</p>
          <p className="py-3">Overview</p>
          <p className="py-3">Overview</p>
          <p className="py-3">Overview</p>
        </div>
        <div className="flex flex-col items-start justify-center w-full gap-x-2">
          <p className="py-3">Product</p>
          <p className="py-3">Pricing</p>
          <p className="py-3">Overview</p>
          <p className="py-3">Overview</p>
          <p className="py-3">Overview</p>
          <p className="py-3">Overview</p>
        </div>
        <div className="flex flex-col items-start justify-center w-full gap-x-2">
          <p className="py-3">Product</p>
          <p className="py-3">Pricing</p>
          <p className="py-3">Pricing</p>
          <p className="pt-12 pb-3">Overview</p>
          <div className="flex items-start justify-center gap-x-4">
            <Youtube />
            <Facebook />
            <Twitter />
            <Linkedin />
            <Instagram />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between py-6 gap-x-12">
        <p>Collers @ 2023.</p>
        <div className="flex gap-x-8">
          <p>Terms</p>
          <p>Privacy</p>
          <p>Contact</p>
          <p>En</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
