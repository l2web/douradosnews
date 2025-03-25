import { Globe } from "lucide-react";
import { Button } from "./ui/button";
import { headerStyles } from "../styles/Header.styles";

const Header = () => {
  return (
    <div className={headerStyles.container}>
      <div className={headerStyles.contentWrapper}>
        <div className={headerStyles.logoContainer}>
          <div className={headerStyles.logoWrapper}>
            <div className={headerStyles.logoTextContainer}>
              <span className={headerStyles.logoText1}>DOURADOS</span>
              <span className={headerStyles.logoText2}>NEWS</span>
            </div>
            <span className={headerStyles.logoSubtext}>A FONTE DA INFORMAÇÃO</span>
          </div>
        </div>
        
        <div className={headerStyles.actionsContainer}>
          <div className={headerStyles.websiteContainer}>
            <Globe className={headerStyles.globeIcon} />
            <a href="https://www.douradonews.com.br" target="_blank" rel="noopener noreferrer" className={headerStyles.websiteLink}>
              www.douradonews.com.br
            </a>
          </div>
          <Button className={headerStyles.ctaButton}>Contratar Agora</Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
