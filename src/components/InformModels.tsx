import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { informModelsStyles } from "../styles/InformModels.styles";

const InformModels = () => {
  return (
    <div className={informModelsStyles.container}>
      <div className={informModelsStyles.contentWrapper}>
        <div className={informModelsStyles.mainContainer}>
          <div className={informModelsStyles.tabsContainer}>
            <Tabs defaultValue="informe1" className="w-full">
              <TabsList className={informModelsStyles.tabsList}>
                <TabsTrigger value="informe1" className={informModelsStyles.tabTrigger}>Informe em Destaque Lateral</TabsTrigger>
                <TabsTrigger value="informe2" className={informModelsStyles.tabTrigger}>Informe na Lista de Notícias</TabsTrigger>
                <TabsTrigger value="informe3" className={informModelsStyles.tabTrigger}>Informe na Vitrine</TabsTrigger>
              </TabsList>
              
              <TabsContent value="informe1" className={informModelsStyles.tabContent}>
                <div className={informModelsStyles.gridContainer}>
                  <div className={`${informModelsStyles.infoCard} ${informModelsStyles.infoCardPrimary}`}>
                    <h3 className={informModelsStyles.infoTitle}>1. Informe em Destaque Lateral</h3>
                    <div className={informModelsStyles.infoContainer}>
                      <div>
                        <h4 className={informModelsStyles.infoSection}>Descrição:</h4>
                        <p>Destacar foto da capa (JPG ou PNG), Altura x Largura 530x780;</p>
                      </div>
                      
                      <div>
                        <h4 className={informModelsStyles.infoSection}>Localização:</h4>
                        <p>Versão Desktop: Ao lado da vitrine de notícias na página inicial. Na versão mobile: abaixo da vitrine.</p>
                        <p className="mt-2">A matéria é inserida em nossas redes sociais com o link.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className={informModelsStyles.imageContainer}>
                    <img 
                      alt="Exemplo de informe em destaque lateral" 
                      className={informModelsStyles.image} 
                      src="/lovable-uploads/e6bd6619-8fab-437f-8f61-b072f573ea2e.jpg" 
                    />
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="informe2" className={informModelsStyles.tabContent}>
                <div className={informModelsStyles.gridContainer}>
                  <div className={`${informModelsStyles.infoCard} ${informModelsStyles.infoCardSecondary}`}>
                    <h3 className={informModelsStyles.infoTitle}>2. Informe na Lista de Notícias</h3>
                    <div className={informModelsStyles.infoContainer}>
                      <div>
                        <h4 className={informModelsStyles.infoSection}>Descrição:</h4>
                        <p>Destacar foto da capa (JPG ou PNG), Altura x Largura 530x780;</p>
                      </div>
                      
                      <div>
                        <h4 className={informModelsStyles.infoSection}>Localização:</h4>
                        <p>Versão Desktop: Ao lado da vitrine de notícias na página inicial. Na versão mobile: abaixo da vitrine.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className={informModelsStyles.imageContainer}>
                    <img 
                      alt="Exemplo de informe na lista de notícias" 
                      className={informModelsStyles.image} 
                      src="/lovable-uploads/3360c042-8c77-44c7-82b6-5a911f9c5d31.jpg" 
                    />
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="informe3" className={informModelsStyles.tabContent}>
                <div className={informModelsStyles.gridContainer}>
                  <div className={`${informModelsStyles.infoCard} ${informModelsStyles.infoCardTertiary}`}>
                    <h3 className={informModelsStyles.infoTitle}>3. Informe na Vitrine</h3>
                    <div className={informModelsStyles.infoContainer}>
                      <div>
                        <h4 className={informModelsStyles.infoSection}>Tamanho:</h4>
                        <p>Desktop: 940px X 400px</p>
                        <p>Mobile: 300px X 360px.</p>
                      </div>
                      
                      <div>
                        <h4 className={informModelsStyles.infoSection}>Localização:</h4>
                        <p>Na vitrine da página inicial do site. Banner Página Inicial. A matéria é inserida em nossas redes sociais com o link.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className={informModelsStyles.imageContainer}>
                    <img 
                      alt="Exemplo de informe na vitrine" 
                      className={informModelsStyles.image} 
                      src="/lovable-uploads/2c2bc59f-88f8-490c-a993-747899949c1e.jpg" 
                    />
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
          
          <div className="w-full md:w-1/3 text-right">
          </div>
        </div>
      </div>
    </div>
  );
};

export default InformModels;