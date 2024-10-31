import SocialIcon from './SocialIcon';
import BottomBar from './BottomBar';
import Column from './Column';
import Link from './Link';
import StoreButton from './StoreButton';

import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { FaApple, FaGooglePlay } from 'react-icons/fa';

function Footer() {
  const productLinks = [
    { text: 'Pricing', href: '#' },
    { text: 'Overview', href: '#' },
    { text: 'Browse', href: '#' },
    { text: 'Accessibility', href: '#' },
    { text: 'Five', href: '#' },
  ];

  const solutionLinks = [
    { text: 'Brainstorming', href: '#' },
    { text: 'Ideation', href: '#' },
    { text: 'Wireframing', href: '#' },
    { text: 'Research', href: '#' },
    { text: 'Design', href: '#' },
  ];

  const supportLinks = [
    { text: 'Contact Us', href: '#' },
    { text: 'Developers', href: '#' },
    { text: 'Documentation', href: '#' },
    { text: 'Integrations', href: '#' },
    { text: 'Reports', href: '#' },
  ];

  const socialIcons = [
    { Icon: FaYoutube },
    { Icon: FaFacebookF },
    { Icon: FaTwitter },
    { Icon: FaInstagram },
    { Icon: FaLinkedinIn },
  ];
  return (
    <footer className="flex flex-col w-full">
      <div className="grid grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-4">
        <Column title="Product">
          {productLinks.map((link, index) => (
            <Link key={index} href={link.href}>
              {link.text}
            </Link>
          ))}
        </Column>

        <Column title="Solutions">
          {solutionLinks.map((link, index) => (
            <Link key={index} href={link.href}>
              {link.text}
            </Link>
          ))}
        </Column>

        <Column title="Support">
          {supportLinks.map((link, index) => (
            <Link key={index} href={link.href}>
              {link.text}
            </Link>
          ))}
        </Column>

        <Column title="Get the App">
          <div className="mb-3">
            <div className="flex items-center justify-center md:justify-start">
              <StoreButton
                icon={FaApple}
                storeName="App Store"
                subtitle="Download on the"
                href="#"
              />
            </div>
            <div className="flex items-center justify-center md:justify-start">
              <StoreButton
                icon={FaGooglePlay}
                storeName="Google Play"
                subtitle="GET IT ON"
                href="#"
              />
            </div>
            <h4 className="flex items-center justify-center pt-12 pb-3 mb-4 text-base font-medium text-white j md:justify-start">
              Follow Us
            </h4>
            <div className="flex space-x-4">
              {socialIcons.map((icon, index) => (
                <SocialIcon key={index} Icon={icon.Icon} />
              ))}
            </div>
          </div>
        </Column>
      </div>

      <BottomBar />
    </footer>
  );
}

export default Footer;
