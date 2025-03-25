import { Button } from "./ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Check } from "lucide-react";
import { informPackagesStyles } from "../styles/InformPackages.styles";

const InformPackages = () => {
  return (
    <div className={informPackagesStyles.container}>
      <div className={informPackagesStyles.contentWrapper}>
        <div className={informPackagesStyles.packageHeader}>
          <h2 className={informPackagesStyles.packageTitle}>Pacote: Marca no Digital</h2>
        </div>
        
        <Card className={informPackagesStyles.mainCard}>
          <CardHeader className={informPackagesStyles.cardHeader}>
            <CardTitle className={informPackagesStyles.cardTitle}>Pacote Completo</CardTitle>
            <p className={informPackagesStyles.cardSubtitle}>Investimento com Desconto Exclusivo</p>
          </CardHeader>
          <CardContent className={informPackagesStyles.cardContent}>
            <div className={informPackagesStyles.priceContainer}>
              <p className={informPackagesStyles.originalPrice}>R$ 4.650,00</p>
              <div className={informPackagesStyles.priceWrapper}>
                <p className={informPackagesStyles.discountedPrice}>R$ 2.900,00</p>
                <p className={informPackagesStyles.savingsText}>Economia de R$ 1.750,00</p>
              </div>
            </div>
            
            <div className={informPackagesStyles.featuresList}>
              <div className={informPackagesStyles.featureItem}>
                <Check className={informPackagesStyles.checkIcon} />
                <p>30 Dias nas Redes Sociais - 3x por semana</p>
              </div>
              <div className={informPackagesStyles.featureItem}>
                <Check className={informPackagesStyles.checkIcon} />
                <p>1 matéria no Informe Destaque por 24 horas - Abaixo da vitrine principal do site</p>
              </div>
              <div className={informPackagesStyles.featureItem}>
                <Check className={informPackagesStyles.checkIcon} />
                <p>1 Live Publicitária no Facebook (Duração de 10 a 15 minutos)</p>
              </div>
              <div className={informPackagesStyles.featureItem}>
                <div className={informPackagesStyles.bonusIcon}>★</div>
                <p>Bônus: Publicação nas redes sociais do jornal (Facebook e Instagram)</p>
              </div>
            </div>
          </CardContent>
          <CardFooter className={informPackagesStyles.cardFooter}>
            <a 
              href="https://wa.me/5567991511383" 
              target="_blank" 
              rel="noopener noreferrer"
              className={informPackagesStyles.primaryButton}
            >
              Contratar Pacote
            </a>
          </CardFooter>
        </Card>
        
        <div className={informPackagesStyles.sectionHeader}>
          <h3 className={informPackagesStyles.sectionTitle}>Informes Publicitários</h3>
        </div>
        
        <div className={informPackagesStyles.packagesGrid}>
          <Card>
            <CardHeader>
              <CardTitle className={informPackagesStyles.packageCard.header.title}>1. Informe na Vitrine</CardTitle>
              <p className={informPackagesStyles.packageCard.header.price}>R$ 3.200,00</p>
              <p className={informPackagesStyles.packageCard.header.subtitle}>Investimento por inserção</p>
            </CardHeader>
            <CardContent>
              <p className={informPackagesStyles.packageCard.content}>Posição de destaque na vitrine principal do site</p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className={informPackagesStyles.packageCard.footer}>Saiba Mais</Button>
            </CardFooter>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className={informPackagesStyles.packageCard.header.title}>2. Informe em Destaque Lateral</CardTitle>
              <p className={informPackagesStyles.packageCard.header.price}>R$ 2.700,00</p>
              <p className={informPackagesStyles.packageCard.header.subtitle}>Investimento por inserção</p>
            </CardHeader>
            <CardContent>
              <p className={informPackagesStyles.packageCard.content}>Posição de destaque na lateral do site</p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className={informPackagesStyles.packageCard.footer}>Saiba Mais</Button>
            </CardFooter>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className={informPackagesStyles.packageCard.header.title}>3. Informe na Lista</CardTitle>
              <p className={informPackagesStyles.packageCard.header.price}>R$ 1.300,00</p>
              <p className={informPackagesStyles.packageCard.header.subtitle}>Investimento por inserção</p>
            </CardHeader>
            <CardContent>
              <p className={informPackagesStyles.packageCard.content}>Posição na lista de notícias do site</p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className={informPackagesStyles.packageCard.footer}>Saiba Mais</Button>
            </CardFooter>
          </Card>
        </div>
        
        <div className={informPackagesStyles.bonusContainer}>
          <div className={informPackagesStyles.bonusContent}>
            <div className={informPackagesStyles.bonusIcon}>★</div>
            <p className={informPackagesStyles.bonusText}>BÔNUS: A matéria inserida no site será publicada nas redes sociais do jornal DouradosNews - Facebook e Instagram (feed e stories).</p>
          </div>
        </div>
        
        <div className={informPackagesStyles.sectionHeader}>
          <h3 className={informPackagesStyles.sectionTitle}>Cobertura / Inauguração / Eventos Corporativos</h3>
        </div>
        
        <Card className="mb-8">
          <CardHeader className={informPackagesStyles.eventCard.header}>
            <CardTitle className={informPackagesStyles.eventCard.title}>Cobertura de Eventos</CardTitle>
            <div className={informPackagesStyles.eventCard.priceContainer}>
              <p className={informPackagesStyles.eventCard.price}>R$ 3.200,00</p>
              <p className={informPackagesStyles.eventCard.priceRange}>a R$ 3.700,00</p>
            </div>
            <p className={informPackagesStyles.eventCard.location}>Valor válido em Dourados</p>
          </CardHeader>
          <CardContent>
            <div className={informPackagesStyles.eventFeatures}>
              <div className={informPackagesStyles.eventFeature}>
                <Check className={informPackagesStyles.eventCheckIcon} />
                <p>01 Matéria no site (+ inserção em Facebook e Instagram)</p>
              </div>
              <div className={informPackagesStyles.eventFeature}>
                <Check className={informPackagesStyles.eventCheckIcon} />
                <p>Cobertura em stories Instagram/Facebook no dia da Inauguração ou Evento Corp.</p>
              </div>
              <div className={informPackagesStyles.eventFeature}>
                <Check className={informPackagesStyles.eventCheckIcon} />
                <p>01 Vídeo em Formato Reels durante a cobertura</p>
              </div>
              <div className={informPackagesStyles.eventFeature}>
                <Check className={informPackagesStyles.eventCheckIcon} />
                <p>01 Live - Transmissão Ao vivo no dia da Inauguração ou Evento Corporativo</p>
              </div>
              <div className={informPackagesStyles.eventFeature}>
                <Check className={informPackagesStyles.eventCheckIcon} />
                <p>Cobertura com Fotos / Fotógrafa (1h30 a 2h) no dia da Inauguração ou Evento Corporativo</p>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <a 
              href="https://wa.me/5567991511383" 
              target="_blank" 
              rel="noopener noreferrer"
              className={informPackagesStyles.primaryButton}
            >
              Contratar Cobertura
            </a>
          </CardFooter>
        </Card>
        
        <p className={informPackagesStyles.note}>Obs: Proposta Válida por 15 dias após envio ao cliente em 2025</p>
      </div>
    </div>
  );
};

export default InformPackages;
