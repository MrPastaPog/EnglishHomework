const selectionCharacters = document.querySelector('.selection-characters');
const mainView = document.querySelector('.main-view');
const paraStructure = document.querySelector('.para-structure');
const selectionSetting = document.querySelector('.selection-setting');
const selectionThemes = document.querySelector('.selection-themes');
const subSelection = document.querySelector('.sub-selection')
const imageView = document.querySelector('.image-view');
const header = document.querySelector('.header');
const bibliography = document.querySelector('.bibliography');
const quizButton = document.querySelector('.quiz');

quizButton.addEventListener('mousedown', (event) => {
  window.location.href += "quiz.html"
})
selectionCharacters.addEventListener('mousedown', (event) => {
  subSelection.innerHTML = "<button style='grid-column: 1;'>Pisthetaerus</button><button style='grid-column: 2;'>Euelpides</button><button style='grid-column: 3;'>Tereus</button><button style='grid-column: 4;'>Chorus Leader</button>";
  
})
selectionSetting.addEventListener('mousedown', (event) => {
  subSelection.innerHTML = "<button style='grid-column: 1;'>Athens</button><button style='grid-column: 2;'>Cloudcuckooland</button>";
})
selectionThemes.addEventListener('mousedown', (event) => {
  subSelection.innerHTML = "<button style='grid-column: 1;'>Comedy</button><button style='grid-column: 2;'>Freedom</button><button style='grid-column: 3;'>Power</button>";
})
subSelection.addEventListener('mousedown', (event) => {
  bibliography.toggleAttribute('hidden', false);
  console.log(event.target.firstChild.data)
  switch (event.target.firstChild.data) {
    case "Pisthetaerus":
      imageView.innerHTML = "<img style='position: relative; left: 50%; transform: translateX(-50%);' src='/EnglishHomework/Images/peisthetaerus.jpg'>";
      header.innerHTML = "Pisthetaerus";
      paraStructure.innerHTML = `
<h1>Character Description:</h1>
  Pisthetaerus is an Athenian, who became disillusioned with life in Athens
  and seeks a better life. He is smart, ambitious and persuasive. Pisthetaerus embodies the
  personality of a hero who uses his intelligence to acheive what he wants.

<h1>Role and Actions in the Play:</h1>
  Pisthetaerus first persuades the birds, who at first have distrusted humans, to join
  Pisthetaerus in creating a city in the sky which will control the space between 
  earth and heaven, thereby stealing the offerings and sacrifices made by humans for the gods.
  Under his leadership, the birds build the city. Pisthetaerus's plan is to intercept the smoke
  from human sacrifices begins to work, which starves the gods, this would force the
  gods to negotiate with the birds. This city becomes symbolic of a utopia, with an 
  ideal society removing the flaws of Athens and the gods.
  When the gods realize they are being deprived of their offerings, they send messagers
  to negotiate with Pisthetaerus, however instead of defending Cloudcuckooland; he demands Zues
  hand over the scepter of authority and that the birds will be the new rulers.
  During the end of the play, Pisthetaerus' manipulative abilities allowed him to outmaneuver
  both the birds and the gods. Zues yields, giving Pisthetaerus the scepter and approval to marry 
  Sovereignty, who is the personification of dominion and power.

<img style="position: absolute; right: 100px; width: 400px; height: 400px; transform: translateY(-100%);" src="/EnglishHomework/Images/zues.jpg">

<h1>Analysis:</h1>
  Pisthetaerus symbolises the theme of ambition. His name in greek roughly
  translates to trusty friend. His transition from a unhappy Athenian to the ruler of the universe
  shows Aristophanes satrical take on our human nature to desire more. 
  Aristophanes uses Pisthetaerus to satirize the Athenian society's political ideaology.
  Pisthetaerus is used to mock the idea that humans can create a perfect society, as 
  in Cloudcuckooland peace still requires manipulation and force.
  Pisthetaerus's success is based on his ability to persuade the people who want to join
  Cloudcuckooland. When people arrive for bad intentions Pisthetaerus still needs to persuade
  them that they can't join for those reasons. Meaning even in a utopia you still 
  need laws and rules to enforce peace upon everyone in the society.
      `
      break;
    case "Euelpides":
      imageView.innerHTML = "<img style='position: relative; left: 50%; transform: translateX(-50%);' src='/EnglishHomework/Images/euelpides.jpg'>";
      header.innerHTML = "Euelpides";
      paraStructure.innerHTML = `
<h1>Character Description:</h1>
  Euelpides, whose name is translated to "Good Hope", is an Athenian who also like Pisthetaerus, has become 
  disillusioned with his life in Athens. He is viewed as simple-minded, happy to follow Pisthetaerus on the journey
  Euelpides is more comedic then Pisthetaerus, providing humour through his skepticism and cowardice.

<img style="position: absolute; right: 100px; width: 400px; height: 400px; transform: translateY(-60%);" src="/EnglishHomework/Images/euelpidesart.jpg">

<h1>Role and Actions in the play:</h1>
  Pisthetaerus and Euelpides travel together, being guided by their birds, in search for a better life. 
  Euelpides has doubts during their journey which highlights his more cautious and hesitant nature compared
  to Pisthetaerus. When fisrt meeting the birds. Euelpides is less eager to engage with them. He is much more reluctant then 
  Pisthetaerus, Pisthetaerus is more eager to present the plans for Cloudcuckooland then Euelpides. During early scenes Euelpides 
  brings more comic relief using his reluctant nature, Expressing confusion or fear when interacting with the 
  unknown. Once Pisthetaerus lays out his ambitions Euelpides takes on a supportive role and helps Pisthetaerus through supporting
  his efforts. He doesent actively participate in the persuasion of the birds, or the creation of Cloudcuckooland but
  he does help Pisthetaerus with the work never taking the lead.Progressing through the play, Euelpides becomes less important to the plot. Pisthetaerus takes center stage, 
  while Euelpides gets put in the background. The transition displays the contrast between Pisthetaerus and Euelpides
  Pisthetaerus is a leader, he is more ambitious and will put more effort into his goals. Euelpides personality makes
  him more loyal and supportive. Instead of being a risk taker or persuasive, he makes sure to assist Pisthetaerus.

<h1>Analysis:</h1>
  Euelpides modesty emphasizes Pisthetaerus boldness. His reluctance to fully embrace the plans calms Pisthetaerus's 
  ambitions, but his willingness to follow shows how being around a persuasive leader can still sway the cautious.
  Euelpides is the main provider of comic relief throughout the play. His interactions with Pisthetaerus make him 
  show Euelpides funny traits. His fear and skepticism contribute to the play, making him a relatable Character
  among the other more powerful characters.
      `
      break;
    case "Tereus":
      imageView.innerHTML = "<img style='position: relative; left: 50%; transform: translateX(-50%);' src='/EnglishHomework/Images/tereus.png'>";
      header.innerHTML = "Tereus";
      paraStructure.innerHTML = `
<h1>Character Description:</h1>
  Tereus in Greek Mythology was a king of Thrace, he was the son of Ares the god of war. Tereus was married to the Princess Procne and the father of Itys.
  Tereus is known for his violent and aggressive nature. including raping his sister in law, Philomela, and multilation to prevent her from speaking of
  the crime. His wife, Procne took revenge by killing their own son Itys and serving him as a meal to Tereus. The gods transform Tereus, Procne and Philomela into
  birds. With Tereus transforming into a Hoopoe.

<h1>Role in the Play:</h1>
  Tereus, after being transformed into a bird, plays an important role as the middle-man between the human world and bird world. When Pisthetaerus and Euelpides
  arrive in search of a better life, Tereus is the first bird they encounter. He introduces them to the idea of building a grand city in the sky, where the birds
  could rule over both the gods and the humans, he becomes a key figure in helping the humans communicate with the birds.

<h1>Actions in the Play:</h1>
  Tereus explains to Pisthetaerus and Euelpides the idea of the bird world, offering then an alternative to the corrupt human society they wish to escape.

  Tereus helps Pisthetaerus and Euelpides gain the trust of the birds, who initially dont trust the humans. He assures the other birds that humans are allies
  and not threats.

  Once Pisthetaerus comes up with the idea of building "Cloudcuckooland", Tereus assists with organizing the bird community to work towards its creation.

<h1>Analysis:</h1>
  Tereus in "The Birds" represents the blend between his tragic backstory and Aristophanes comedy. His character is the transformation from a brutal and vengeful 
  myth to a comedic character. This shift allows Aristophanes to use the themes of power in a lighthearted and comedic way. The symbolism of the Hoopoe
  is linked to punishment and redemption. In a humerous manner, Tereus in not a violent king but he is a bird. This shift from king to bird is a metaphor
  for how he also changes from an evil tyrant to an ally in an ambitious plan to take over the existing rulers of the universe. Tereus's character displays 
  Aristophanes commentary on how peoples indentity and power can change.
      `;
      break;
    case "Chorus Leader":
      imageView.innerHTML = "<img style='position: relative; left: 50%; transform: translateX(-50%);' src='/EnglishHomework/Images/chorus leader.jpg'>";
      header.innerHTML = "Chorus Leader";
      paraStructure.innerHTML = `
<h1>Character Description:</h1>
  The Chorus Leader in Aristophanes "The Birds" is the head of the Chorus of Birds, the Chorus Leader represents the collective voice of the Birds.
  The Chorus leader is an important figure among the play. Guiding the actions of the Chorus. The Chrous Leader often interacts with Pisthetaerus and Euelpides,
  and addressing the audience to provide information on upcoming events.

<h1>Role in the play:</h1>
  The Chorus Leader functions both as a character within the play and as a person giving commentary on the events happening around the character. 
  The Chorus Leader helps make Pisthetaerus and Euelpides understand the birds ideas. The Chorus Leader also helps the birds understand Pisthetaerus
  and Euelpides ideas. This connection between all the different aspects of the play creates a contrast between the humans and birds perspectives on 
  power and freedom.

<img style="position: absolute; right: 100px; scale: 150%;  transform: translateY(-60%);" src="/EnglishHomework/Images/chorusleadergroup.jpg">

<h1>Actions in the play:</h1>
  The Chorus Leader first presents all the birds in bird kingdom using song and dance displaying each bird in the kingdom as distinct and powerful. 

  The Chorus Leader firstly interacts with Pisthetaerus, initially expressing his skepticism for Pisthetaerus's plans, and then later enthusiasm as he
  listens to Pisthetaerus's plan in more detail. This shift displays how the Chorus Leader is not biased and changes his opinions and helps gather the
  birds collective opinions.

  The Chorus Leader talks on behalf of the birds, explaining their worries about Cloudcuckooland. This also includes the concerns they express about their
  place in the natural order and their potential for power over gods and humans. 

  The Chorus Leader Provides his own commentary on the events of the play, offering reflections that are both serious and comedic. This commentary serves
  a bridge between the action and broader themes Aristophanes explores.

<h1>Analysis:</h1>
  The Chorus Leader in "The Birds" is a important part of the plays themes. As head of the Chorus. The character represents the voice of the birds, which 
  servers to the plays theme of power. the Chorus Leader is a central figure in The Birds, not only driving the action and representing the bird community but also serving as a tool for Aristophanes’ thematic exploration.
      `;
      break;
    case "Athens":
      imageView.innerHTML = "<img style='position: relative; left: 50%; transform: translateX(-50%);' src='/EnglishHomework/Images/athens.jpg'>";
      header.innerHTML = "Athens";
      paraStructure.innerHTML = `
<h1>Athens:</h1> 
  Athens is the capital and the largest city in Greece. it is the eighth largest urban area in the European Union. The city of Athens has a
  population of 643,452 in 2021. Athens is also on of the world's oldest cities, with its history spanning over 3,400 years. According
  to Greek Mythology it was named after the Greek Goddess of wisdom known as Athena. But most scholars now believe that she had her name taken
  from the city itself.

<img style="position: absolute; right: 100px; width: 400px; height: 400px; transform: translateY(-80%);" src="/EnglishHomework/Images/ancientathensmap.jpg">

<h1>Classical Athens and Aristophanes view on its Political System:</h1>
  The city of Athens during the Classical period was the major urban centre of the state also called Athens. The Athenian democracy was
  established in 508 BC under Cleisthenes. The system remain stable and was in place for 180 years. Aristophanes lived from the middle of the fifth
  century to the start of the 4th century BC. Aristophanes was critical of the democracy in Athens during the time, He frequently targeted
  the politicians of the time within his comedies using satire to show the people the flaws and the corruption that Aristophanes believed was
  present within the political system.  

<img style="position: absolute; right: 100px; width: 400px; height: 400px; transform: translateY(-80%);" src="/EnglishHomework/Images/athenspolitics.jpg">

<h1>Aristophanes depiction of Athens in the play "The Birds":</h1>
  At the start of the play Aristophanes introduces us to Pisthetaerus and Euelpides who are escaping Athens to find somewhere better. 
  This already establishes that Aristophanes's opinion on Athens is negative early on. Peistheraerus and Euelpides want to escape the busy life
  in Athens and its corrupt political system. "The Athenians always seek some new thing, and hate the thought of staying at home; they're always
  wandering about, restless and shifting as leaves in the wind, they're forever voyaging, running off to serve as mercenaries abroad." Here 
  Peistheraerus is describing the Athenians describing how they are never happy with their life and always have to improve it. Peistheraerus
  and Euelpides are sick of this life and want to leave it. Aristophanes uses these two characters to express how he feels too in a satire way.
  Aristophanes uses Athens and its people in his comedies as a tool to make his comedies funnier for the people who lived in Athens at the time, and
  also a tool for his true feelings on Athens.

      `;
      break;
    case "Cloudcuckooland":
      imageView.innerHTML = "<img style='position: relative; left: 50%; transform: translateX(-50%);' src='/EnglishHomework/Images/cloudcuckooland.jpg'>";
      header.innerHTML = "Cloudcuckooland";
      paraStructure.innerHTML = `
<h1>Description:</h1>
  Cloudcuckooland is a Utopia planned and built by Pisthetaerus and Euelpides in the play "The Birds" by Aristophanes. Cloudcuckooland is located
  in the sky, between the realm of the gods and the world of humans. This position symbolizes the bridge between the realms, giving it control over 
  communication between the gods and humans. Pisthetaerus and Euelpides make Cloudcuckooland to escape Athens because of its corruption, constant warfare
  and busy lives. The citys main goal is to take control of the space that is where prayers, sacrifices and messages are sent to the gods, thereby
  creating a position of power for the birds over both the gods and the humans.

<img style="position: absolute; right: 100px; width: 400px; height: 400px; transform: translateY(-80%);" src="/EnglishHomework/Images/cloudland.jpg">

<h1>How it was built:</h1>
  During the play the first messenger describes to Pisthetaerus how Cloudcuckooland is being built. The messenger says that only birds made Cloudcuckooland.
  They all worked by hand. "Thirty thousand cranes flew in from Lybia-they brought foundation stones they'd swallowed down. The corn crakes chipped away to from
  the proper shapes. Ten thousand storks brought bricks. Lapwings and other river birds fetch water up into the air from down below." The First Messenger then
  goes on to say how other birds helped in the making of Cloudcuckooland. "The most skilled craftsmen-birds of all of them—woodpeckers. They pecked away to make the gates—the
  noise those peckers made—an arsenal! Now the whole thing has gates. They’re bolted shut and guarded on all sides. Sentries make rounds,
  patrolling with their bells, and everywhere troops are in position, with signal fires on every tower. But I must go now—I need to wash. You’ll have to do the rest.

<h1>Aristophanes symbolism:</h1>
  Cloudcuckooland symbolizes the want for a perfect society. Aristophanse uses the city to mock the idea that a perfect place could ever become reality. 
  The fact that building a city in the clouds is nonsense underlines the fact that a perfect society is also nonsense. Through the creation of Cloudcuckooland
  Aristophanes reflects on the desire to run away and create a perfect world. While this desire is understandable, its portrayed as foolish and unattainable.
  The citys creation and governance under Pisthetaerus, which satirizes the political leaders of Athens. Aristophanes suggests that in a seemingly perfect society,
  human flaws and the desire for control will surface.
      `;
      break;
    case "Comedy":
      imageView.innerHTML = "<img style='position: relative; left: 50%; transform: translateX(-50%);' src='/EnglishHomework/Images/comedy.png'>";
      header.innerHTML = "Comedy";
      paraStructure.innerHTML = `

Aristophanes uses comedy in his play "The Birds" not only to captivate his audience but to also get them to think about their society from a
new viewpoint. This will explain a few different ways Aristophanes used comedy to engage his audience into the play. Poking fun at Athenian politics, 
slapstick humour and quick remarks with deeper meanings are all ways Aristophanes gives his audience another view on life.
<br>
<br>
Aristophanes uses political satire to poke fun at the politics of athens. The plot is about the two athenians who are tired of Athens. 
The fact they come up with an idea of making a big island in the sky, shows how absurd the politcal powers were at the time. Cloudcuckooland
was used as a metaphor for the politics of Athens.
The birds in the play are personified, to be used for comedy, examples are the crazyness of having birds speak and declare war on the
gods, the birds also to give an outsiders view on human society, having birds interact with the humans can allow Aristophanes to make
comments on humans way of thinking through the Birds. The birds also consisted of physical 
humour and slapstick. An example is when Pisthetaerus whipped the poet. This form of humour would
be more apparent when watching the play, Aristophanes wanted the characters to have an exaggerated form of movement and slapstick.
The Birds explores many aspects of Athenian society, such as on going legal disputes, the need for power, and the constant change of
public opinion. Using these familiar issues to the athenian public, Aristophanes allows his audience to think about society from a different view. 
<br>
<br>
Aristophanes uses comedy in The Birds not only to entertain, but to create thought provoking questions and reflection among the audience. By combining
the comedy on political satire, absurd situations and the slapstick humor, he makes a play that is able to make people laugh and question together.
      `;
      break;
    case "Freedom":
      imageView.innerHTML = "<img style='position: relative; left: 50%; transform: translateX(-50%);' src='/EnglishHomework/Images/freedom.jpg'>";
      header.innerHTML = "Freedom";
      paraStructure.innerHTML = `
Aristophanes explores the theme of freedom in "The Birds" to create a deeper meaning within the play 
to express how true freedom and peace cannot mix. Aristophanes gives Pisthetaerus and Euelpides the goal to create a society 
of freedom and peace, he then creates characters which display to the audience why this is not possible, Examples include the priest, the poet and the young man.
<br>
<br>
While Cloudcuckooland is being built the priest comes to Cloudcuckooland so the people who live there can practice religion. Pisthetaerus kicks
him out because the priest represents restrictions, Pisthetaerus didnt want restrictions because that breaks away from a utopia as a utopia 
requires freedom to exist. However even though Pisthetaerus kicks him out to maintain freedom the next characters who arrive allow Aristophanes
to show why true freedom is not possible. The poet comes to Cloudcuckooland to sing songs of praise to Pisthetaerus as leader, Pisthetaerus kicks
him out which symbolises that flattery and meaningless words arent welcome in Cloudcuckooland, having a poet praising Pisthetaerus also means that
he is the leader which creates a social heiarchy within Cloudcuckooland, if a social heiarchy is present that means that not everyone is equal
removing the possibility for a utopia. Later the young man arrives, thinking that if he lives in Cloudcuckooland he would be able to kill his
father because he could have freedom to do whatever he wants, Pisthetaerus kicks him out which allows Aristophanes to tell us that Cloudcuckooland
is not even close to being free, If the people in Cloudcuckooland were actually allowed to do whatever they wanted Pisthetaerus would not have
kicked them all out, however if he let them in there wouldnt be peace. This part of the play displays exactly why a human utopia is not possible.
<br>
<br>
Aristophanes used these characters to express the difficulties in creating a peacefull society where anyone can do what they want. A peaceful society 
has to be restricted in some way however a Utopia requires freedom, everyone to be equal and everyone to be in harmony. Which is too difficult for a 
human rulership to create with its imperfect human qualities. 
      `;
      break;
    case "Power":

      imageView.innerHTML = "<img style='position: relative; left: 50%; transform: translateX(-50%);' src='/EnglishHomework/Images/power.jpg'>";
      header.innerHTML = "Power";
      paraStructure.innerHTML = `
      Aristophanes explores the theme of power within the play "The Birds" to convey his ideas to his audience. This Segment will explore the 
many different characters and ideas that Aristophanes used to express his message about power and how it affects society. Examples include
political power within the play and why Pisthetaerus and Euelpides rejected it. Divine power of how humans are able to challange the gods and
Social power and manipulation mainly the manipulation that Pisthetaerus uses.
<br>
<br>
In "The Birds" Aristophanes expresses his ideas on power through Pisthetaerus and Euelpides commentary on Athens political power. These two characters
flee Athens in search of a better life, express their own disillusionment with Athens political corruption and stupidity. This not only reflects the
characters opinions but also Aristophanes personal opinions of Athens. Later when Pisthetaerus builds Cloudcuckooland, the struggle to make sure 
that everyone is doing the right thing shows how it is hard to not have a political power in place to keep order and relative peace. Aristophanes
also touches on the theme of divine power and how man can challange the gods. Pisthetaerus does this by creating Cloudcuckooland to starve the gods of 
their sacrifices, allowing Pisthetaerus to bargain with the gods and take their power. Aristophanes uses this to show the audience that diving power is
not invincible and can be overthrown through strategy. Pisthetaerus demonstrates his abillity to control others through speech. His manipulation of the birds
to build Cloudcuckooland and his dealing with the gods show how power can be obtained through persuasion.
<br>
<br>
Aristophanes uses the plots in the play to create deeper messages about power, the ability to maintain power and how quickly it can be overthrown.
Aristophanes critiques the political and social power during his time, while also exporing broader types of power involving the gods.
      `;
      break;
    b  
    
  }
})