const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "!";

const braquage = {
  a: "Banque Central",
  b: "Supérette (Magasin Unicornes)",
  c: "Supérette (Groove Street)",
  d: "Banque Central (Derriere)"
};

const roles = {
  a: `\n==GOUVERNEMENT==
  __Président__
  __Vice-Président(e)__
  __Garde du corps__ **2250€**	
  __Chauffeur Du Président__
  __Avocat__ **1750€**
  __Juge__ **2500€**
  
==LSPD==
  __Commandant__ **3250€** 
  __Capitaine__ **3000€**
  __Lieutenant__ **2250€**
  __Sergent Chef__ **2000€**
  __Sergent__ **1750€**
  __Officier__ **1250€**
  __Cadet__ **1000€**
  __S.W.A.T__ **2250€**
  
==LSMS DE LOS SANTOS==
  __PDG EMS__ **3000€**	
  __Patron de l'hôpital__ **2500€**	
  __Chef Ambulancier__ **1800€**
  __Ambulancier__ **1750€**	
  __Stagiaire__ **1000€**
  
==BANQUE==
  __Patron Banquier__ **3000€**	
  __Employé Banquier__ **2500€**
  
==AUTO ECOLE==
  __PDG Auto Ecole__ **3000€**
  __Patron Moniteur d'Auto école__
  __Moniteur d'Auto Ecole__ **1500€**
  
==MECANO==
  __PDG Mécano__ **3000€**
  __Mécanicien__ **2500€**
  
==JOURNALISTE==
  __Chef Journaliste__ **3000€**
  __Journaliste__
  
==ORGANISATEUR D'EVENEMENT==
  __Patron Organisateur d'Evenement__
  __Organisteur d'Evenement__ **2000€**\n***En souligner les Metier et en gras les Salaires*** .Pour voir la suite des rôles faite "!roles 2"`,
  b: `\n==VANILLA==
  __PDG Unicorn__ **2500€**
  __Propriétaire Vanilla__ **2000€**
  __Barman Vanilla__
  __Danseuse Vanilla__
  __Videur Unicorn__
  
==CONCESS==
  __PDG Concessionnaire__ **3000€**
  __Concessionnaire__ **1500€**
  
==ARMURIE==
  __PDG Armurier__ **3000€**
  __Armurier__ **1500€**
  
==AGENCE IMMO==
  __Patron Agent Immobiliers__ **3000€**
  __Employé Agent Immobilier__ **1500€**
  
==TAXIS==
  __Patron Taxi__
  __Taxi__
  
==MINEUR==
  __Mineur__ **1000€**
  
==GANG==
  __Chef Gang__ **400€**
  __Ballas__ **200€**
  __Vagos__ **200€**
  __Families__ **200€**
  __Bloods__ **200€**
  __Whites__ **200€**
  __Cartel De Sinaloa__ **200€**
  __Blanchisseur__
  
==GERANT D'ARME ILLEGALE==
  __Gérant D'Armes Illégales__
  __Vendeur D'Armes Illégales__
  
==CHOMEUR==
  __Chômeur__ **500€**\n ***En gras les Metier et souligner les Salaires***`
};

client.on("ready", function(message) {
  console.log("Online");
});

client.on("guildMemberAdd", function(member)
{
  member.send(`Bienvenue sur le serveur "Helistra RP PS4"\nPasse un agréable moment et n'oublie pas de faire ta candidature pour rejoindre le serveur et jouer :wink:`);
  let memberRole = member.guild.roles.find("name", "『🔊』ATTENTE ENTRETIEN");
  member.addRole(memberRole);
  console.log("Nouveau membre");
});

client.on("message", message => {
  var args = message.content.split(" ");
  let _f = args[0];
  let _y = args[1];
  if (_f === "!braquage") {
    message.delete(message);
    if (_y) {
      if (_y === "1") {
        mbraquage = braquage.a;
        mset = true
      } else if (_y === "2") {
        mbraquage = braquage.b;
        mset = true
      } else if (_y === "3") {
        mbraquage = braquage.c;
        mset = true
      } else if (_y === "4") {
        mbraquage = braquage.d;
        mset = true
      }
      if (mset){
        message.channel.send(`Central !!, **pssss** on a un braquage à la ${mbraquage} !! <@&646061148923363329> :police_car: :moneybag: :rotating_light:`);
        console.log(`Braquage ! ${mbraquage}`);
      }

    }
  }
});

client.on("message", message => {
  var args = message.content.split(" ");
  let _f = args[0];
  let _y = args[1];
  if (_f === "!roles") {
    message.delete(message);
    if (_y) {
      if (_y === "1") {
        mroles = roles.a;
        mset = true
      }
    else if (_y === "2") {
        mroles = roles.b;
        mset = true   
      }
        if (mset){
          message.channel.send(`Voici les roles :${mroles}`);
        console.log(`Commande ! Roles`);
      }

    }
  }
});

client.login(process.env.TOKEN);
