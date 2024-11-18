import Typewriter from 'typewriter-effect';
import profilePictureHero from '../../img/profile-picture.png';
import './HeroProfile.css';

import { useTheme } from '../../context/ThemeContext';

interface HeroProfileprops {}

export const HeroProfile = ({ ...props }: HeroProfileprops) => {
  const { activeTheme } = useTheme();
  return (
    <>
      <div className="hero-profile-container">
        <div className="hero-profile">
          <img src={profilePictureHero} alt="Aman Kumar Profile" />
          <p>Hey there I'm,</p>
          <h1>Aman Kumar</h1>
          <Typewriter
            options={{
              strings: [
                'Software Developer',
               'Web Developer',
                'Gamer',
              ],
              autoStart: true,
              loop: true,
            }}
          />
          <p className="hero-profile-tagline">
            What I excel at is creating software, websites.
          </p>
          <a
            href="https://github.com/Amanydav/"
            target="_blank"
            rel="noopener noreferrer"
            className={
              activeTheme === 'light'
                ? 'hero-profile-button-light-theme'
                : 'hero-profile-button-dark-theme'
            }
          >
            Find me on social media
          </a>
        </div>
      </div>
    </>
  );
};

export default HeroProfile;
