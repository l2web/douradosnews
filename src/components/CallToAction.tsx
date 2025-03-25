import { Button } from "./ui/button";
import { callToActionStyles } from "../styles/CallToAction.styles";

const CallToAction = () => {
  return (
    <div className={callToActionStyles.container}>
      <div className={callToActionStyles.contentWrapper}>
        <div className={callToActionStyles.gridContainer}>
          <div className={callToActionStyles.textContainer}>
            <h2 className={callToActionStyles.title}>O maior site do interior do MS.</h2>
            <p className={callToActionStyles.subtitle}>WWW.DOURADONEWS.COM.BR</p>
            <Button className={callToActionStyles.ctaButton}>
              Anunciar Agora
            </Button>
          </div>
          
          <div className={callToActionStyles.imageContainer}>
            <img 
              alt="Equipe Dourados News" 
              className={callToActionStyles.image} 
              src="/lovable-uploads/84a5311b-38ff-4dcb-8e55-b6599c66cf03.jpg" 
            />
          </div>
        </div>
        
        <div className={callToActionStyles.logoContainer}>
          <img 
            alt="Logo Dourados News 24 Anos" 
            className={callToActionStyles.logo} 
            src="/lovable-uploads/aa052b64-4c27-41cc-ad5c-f18a03248df7.jpg" 
          />
        </div>
      </div>
    </div>
  );
};

export default CallToAction;