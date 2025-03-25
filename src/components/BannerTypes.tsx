import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { bannerTypesStyles } from "../styles/BannerTypes.styles";

const BannerTypes = () => {
  return (
    <div className={bannerTypesStyles.container}>
      <div className={bannerTypesStyles.contentWrapper}>
        <div className={bannerTypesStyles.headerContainer}>
          <h2 className={bannerTypesStyles.headerTitle}>Banners Publicitários no site:</h2>
          <p className={bannerTypesStyles.headerDescription}>
            Imagine a sua marca no maior site de notícias do interior do MS durante 24 horas e por 7 dias da semana.
            Selecione o tipo de banner abaixo para visualizar:
          </p>
        </div>
        
        <Tabs defaultValue="banner1" className={bannerTypesStyles.tabsContainer}>
          <TabsList className={bannerTypesStyles.tabsList}>
            <TabsTrigger value="banner1" className={bannerTypesStyles.tabTrigger}>FULL BANNER</TabsTrigger>
            <TabsTrigger value="banner2" className={bannerTypesStyles.tabTrigger}>BANNER VITRINE</TabsTrigger>
            <TabsTrigger value="banner3" className={bannerTypesStyles.tabTrigger}>MEGA BANNER</TabsTrigger>
            <TabsTrigger value="banner4" className={bannerTypesStyles.tabTrigger}>SQUARE BANNER</TabsTrigger>
            <TabsTrigger value="banner5" className={bannerTypesStyles.tabTrigger}>REC BANNER</TabsTrigger>
          </TabsList>
          
          <TabsContent value="banner1" className={bannerTypesStyles.tabContent}>
            <div className={bannerTypesStyles.bannerGrid}>
              <div className={bannerTypesStyles.imageContainer}>
                <img alt="Full Banner" className={bannerTypesStyles.image} src="/lovable-uploads/bb9fdc48-f2c3-4fee-9b6c-e63995f84ef1.jpg" />
              </div>
              <div>
                <h3 className={bannerTypesStyles.bannerTitle}>1. FULL BANNER</h3>
                <div className={bannerTypesStyles.infoContainer}>
                  <h4 className={bannerTypesStyles.infoTitle}>Tamanhos:</h4>
                  <p><span className={bannerTypesStyles.infoText}>Desktop:</span> (1260x200)</p>
                  <p><span className={bannerTypesStyles.infoText}>Mobile:</span> (320x100)</p>
                  <p><span className={bannerTypesStyles.infoText}>Peso máximo:</span> 120 kb</p>
                  <p><span className={bannerTypesStyles.infoText}>Localização:</span> No topo do site em todas as páginas.</p>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="banner2" className={bannerTypesStyles.tabContent}>
            <div className={bannerTypesStyles.bannerGrid}>
              <div className={bannerTypesStyles.imageContainer}>
                <img alt="Banner Vitrine" className={bannerTypesStyles.image} src="/lovable-uploads/54736a0b-6d4f-4b27-b20a-1b4d4c14ff96.jpg" />
              </div>
              <div>
                <h3 className={bannerTypesStyles.bannerTitle}>2. BANNER VITRINE</h3>
                <div className={bannerTypesStyles.infoContainer}>
                  <h4 className={bannerTypesStyles.infoTitle}>Tamanhos:</h4>
                  <p><span className={bannerTypesStyles.infoText}>Desktop:</span> 940px X 400px</p>
                  <p><span className={bannerTypesStyles.infoText}>Mobile:</span> 300px X 360px</p>
                  <p><span className={bannerTypesStyles.infoText}>Localização:</span> Na vitrine da página inicial do site. Banner Página Inicial.</p>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="banner3" className={bannerTypesStyles.tabContent}>
            <div className={bannerTypesStyles.bannerGrid}>
              <div className={bannerTypesStyles.imageContainer}>
                <img alt="Mega Banner" className={bannerTypesStyles.image} src="/lovable-uploads/50af1ccd-c4ee-43f1-8b43-6a91105c6e14.jpg" />
              </div>
              <div>
                <h3 className={bannerTypesStyles.bannerTitle}>3. MEGA BANNER</h3>
                <div className={bannerTypesStyles.infoContainer}>
                  <h4 className={bannerTypesStyles.infoTitle}>Tamanhos:</h4>
                  <p><span className={bannerTypesStyles.infoText}>Tamanho:</span> 970x250</p>
                  <p><span className={bannerTypesStyles.infoText}>Desktop:</span> 320x50</p>
                  <p><span className={bannerTypesStyles.infoText}>Localização:</span> Abaixo dos destaques na página inicial</p>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="banner4" className={bannerTypesStyles.tabContent}>
            <div className={bannerTypesStyles.bannerGrid}>
              <div className={bannerTypesStyles.imageContainer}>
                <img alt="Square Banner" className={bannerTypesStyles.image} src="/lovable-uploads/a4a1eebd-a4d2-40f4-922c-c13e6657cf63.jpg" />
              </div>
              <div>
                <h3 className={bannerTypesStyles.bannerTitle}>4. SQUARE BANNER</h3>
                <div className={bannerTypesStyles.infoContainer}>
                  <h4 className={bannerTypesStyles.infoTitle}>Tamanho:</h4>
                  <p>300px X 250px</p>
                  <p><span className={bannerTypesStyles.infoText}>Localização:</span> No começo, meio e fim da barra lateral do site.</p>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="banner5" className={bannerTypesStyles.tabContent}>
            <div className={bannerTypesStyles.bannerGrid}>
              <div className={bannerTypesStyles.imageContainer}>
                <img alt="Rec Banner" className={bannerTypesStyles.image} src="/lovable-uploads/b1beb4d0-9117-4d89-908e-f3af67321515.jpg" />
              </div>
              <div>
                <h3 className={bannerTypesStyles.bannerTitle}>5. REC BANNER</h3>
                <div className={bannerTypesStyles.infoContainer}>
                  <h4 className={bannerTypesStyles.infoTitle}>Tamanho:</h4>
                  <p>300px X 100px</p>
                  <p><span className={bannerTypesStyles.infoText}>Localização:</span> Na coluna lateral acima da enquete do site.</p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default BannerTypes;