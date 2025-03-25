import { Button } from "./ui/button";
import { Phone, MapPin, Instagram, Facebook, Youtube } from "lucide-react";
import { contactFooterStyles } from "../styles/ContactFooter.styles";

const ContactFooter = () => {
  return (
    <div className={contactFooterStyles.container}>
      <div className={contactFooterStyles.contentWrapper}>
        <div className={contactFooterStyles.gridContainer}>
          <div className={contactFooterStyles.textContainer}>
            <h2 className={contactFooterStyles.title}>
              A sua marca merece anunciar no maior site do interior do MS.
            </h2>
            
            <p className={contactFooterStyles.description}>
              O Dourados News foi criado nos anos 2000 e se tornou o 
              site de notícias mais acessado de Dourados e do interior 
              do MS. A cada ano que passa, aumenta a sua audiência 
              com credibilidade e transparência.
            </p>
            
            <p className={contactFooterStyles.slogan}>Somos a Fonte da Informação.</p>
            
            <div className={contactFooterStyles.contactContainer}>
              <div className={contactFooterStyles.contactItem}>
                <div className={contactFooterStyles.iconContainer}>
                  <Phone className={contactFooterStyles.icon} />
                </div>
                <span className={contactFooterStyles.phoneText}>67 3423.5060</span>
              </div>
              
              <div className={contactFooterStyles.contactItem}>
                <div className={contactFooterStyles.iconContainer}>
                  <MapPin className={contactFooterStyles.icon} />
                </div>
                <span className={contactFooterStyles.addressText}>Rua João Vicente Ferreira, 2753 - Jardim Tropical CEP:79823-010 | Dourados-MS</span>
              </div>
            </div>
            
            <p className={contactFooterStyles.socialText}>Clique nos ícones abaixo e acesse:</p>
            
            <div className={contactFooterStyles.socialContainer}>
              <a href="https://www.douradonews.com.br" target="_blank" rel="noopener noreferrer" className={contactFooterStyles.socialLink}>
                <img alt="Logo Dourados News" className={contactFooterStyles.logo} src="/lovable-uploads/e73ad3f8-6cba-44ba-87ec-be1d1f0b641b.jpg" />
              </a>
              
              <a href="https://www.instagram.com/douradonews" target="_blank" rel="noopener noreferrer" className={contactFooterStyles.socialLink}>
                <Instagram className={`${contactFooterStyles.socialIcon} ${contactFooterStyles.instagramIcon}`} />
              </a>
              
              <a href="https://www.facebook.com/douradonews" target="_blank" rel="noopener noreferrer" className={contactFooterStyles.socialLink}>
                <Facebook className={`${contactFooterStyles.socialIcon} ${contactFooterStyles.facebookIcon}`} />
              </a>
              
              <a href="https://www.youtube.com/douradonews" target="_blank" rel="noopener noreferrer" className={contactFooterStyles.socialLink}>
                <Youtube className={`${contactFooterStyles.socialIcon} ${contactFooterStyles.youtubeIcon}`} />
              </a>
            </div>
          </div>
          
          <div className={contactFooterStyles.imageContainer}>
            <img 
              alt="Sede Dourados News" 
              className={contactFooterStyles.image} 
              src="/lovable-uploads/a3034027-5f04-4817-8b15-cb2f579edd3b.jpg" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactFooter;