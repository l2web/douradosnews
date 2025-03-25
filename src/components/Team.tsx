import { Card, CardContent } from "./ui/card";

type TeamMember = {
  name: string;
  role: string;
  description: string;
  image: string;
};

const TeamSection = () => {
  const teamMembers: TeamMember[] = [
    {
      name: "ANDREIA MEDEIROS",
      role: "Diretora Geral - Proprietária",
      description: "No comando do maior jornal virtual do interior do Estado do Mato Grosso do Sul, a publicitária Andreia Medeiros Rodrigues, atua no mercado da comunicação há 35 anos em Dourados e região.",
      image: "/lovable-uploads/507496a2-9096-4205-9713-2119094bc74b.png"
    },
    {
      name: "ADRIANO MORETO",
      role: "Chefe de Redação",
      description: "Jornalista, responsável por orientar e supervisionar o andamento das pautas, do setor e da equipe de reporteres do Jornal Dourados News.",
      image: "/lovable-uploads/c979ecf3-59c8-4954-a9ad-155109d096c2.png"
    },
    {
      name: "YASMIN GALEANO",
      role: "Gestora de Mídias e Publicidade / Produtora",
      description: "Apresentadora, Produtora Gestora de todo planejamento e organização das coberturas, captações comerciais e publicidade de parceiros do Jornal Dourados News.",
      image: "/lovable-uploads/175fb858-d138-48f8-b8d2-44d2f418a581.png"
    }
  ];

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto">
        <div className="bg-[#F97316] text-white p-8 rounded-lg mb-8">
          <h2 className="text-4xl font-bold mb-4">Conheça o time:</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="relative h-80">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="object-cover h-full w-full"
                />
              </div>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-gray-600 mb-4">{member.role}</p>
                <p className="text-gray-700">{member.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12">
          <img 
            src="/lovable-uploads/ae0d0c1c-b1ca-4df1-989b-dd6fd74e5e58.png" 
            alt="Equipe de Jornalismo, Administrativo, Comercial e Marketing" 
            className="w-full h-auto rounded-lg"
          />
          <p className="text-center text-lg text-[#F97316] mt-4 font-medium">
            EQUIPE DE JORNALISMO, ADMINISTRATIVO, COMERCIAL E MARKETING
          </p>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
