import { Globe } from "lucide-react";
import { AspectRatio } from "./ui/aspect-ratio";
import { heroStyles } from "../styles/Hero.styles";

const Hero = () => {
  return (
    <div className={heroStyles.container}>
      <div className={heroStyles.contentWrapper}>
        <div className={heroStyles.imageContainer}>
          <AspectRatio ratio={16/9} className={heroStyles.imageWrapper}>
            <img 
              src="/lovable-uploads/bac1622e-5c56-430e-ad69-2efc0a899e77.png" 
              alt="Logo Dourados News 24 Anos" 
              className={heroStyles.image}
            />
          </AspectRatio>
        </div>
        
        <div className={heroStyles.textContainer}>
          <p className={heroStyles.subtitle}>Campanha 24 anos</p>
          <h1 className={heroStyles.title}>Mídia Kit</h1>
          <h2 className={heroStyles.subtitle2}>Jornal Dourados News</h2>
          
          <div className={heroStyles.infoContainer}>
            <div className={heroStyles.globeContainer}>
              <Globe className={heroStyles.globeIcon} />
              <div className={heroStyles.globeTextContainer}>
                <p className={heroStyles.globeText}>O maior site de notícias do interior do MS.</p>
                <a href="https://www.douradonews.com.br" className={heroStyles.globeLink}>
                  www.douradonews.com.br
                </a>
              </div>
            </div>
          </div>
          
          <div className={heroStyles.contactContainer}>
            <p className={heroStyles.contactText}>RUA JOÃO VICENTE FERREIRA, 2753 - JARDIM TROPICAL CEP:79823-010 | DOURADOS-MS</p>
            <p className={heroStyles.contactText}>(67) 3423-5060</p>
            <p className={heroStyles.contactText}>DOURADONEWS@DOURADONEWS.COM.BR</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
