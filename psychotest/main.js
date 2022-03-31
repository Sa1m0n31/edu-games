const questions = [
    {
        question: 'Où fais-tu tes courses ?',
        answers: [
            'toujours dans les petites boutiques de mon quartier',
            'souvent dans les petites boutiques de mon quartier',
            'parfois dans les petites boutiques de mon quartier',
            'dans les supermarchés'
        ],
        feedback: 'Faites vos achats auprès de vos commerces de proximité autant que possible. Non seulement, vous les aidez en faisant cela, mais aussi vous faites  vivre votre environnement, car personne ne veut vivre dans un quartier où les vitrines des magasins sont remplacées par des panneaux “À vendre”.'
    },
    {
        question: 'Si  tu achètes des chèques-cadeau, tu les achètes :',
        answers: [
            'toujours chez les petits commerçants',
            'souvent chez les petits commerçants',
            'parfois chez les petits commerçants',
            'toujours dans les grands magasins de marque'
        ],
        feedback: 'Les chèques et cartes-cadeaux permettent de faire plaisir pour un anniversaire, tout en contribuant à la trésorerie des petites entreprises.'
    },
    {
        question: 'Est-ce que tu utilises le service “à emporter” pendant le confinement ?',
        answers: [
            'très souvent afin de soutenir les restaurants du coin',
            'souvent, dans le but de leur laisser un peu d’argent',
            'parfois, quand cela est nécessaire pour moi',
            'jamais, je pense d’abord à faire des économies'
        ],
        feedback: 'Les restaurants ont connu un passage difficile lors des périodes de confinement liées à la COVID19. Ils ont perdu la clientèle “sur place” mais grâce au soutien de leurs clients fidèles, ils ont pu survivre grâce à la vente “à emporter”. Les quartiers ou les centres-villes sans restaurants perdent tout leur charme.'
    },
    {
        question: 'Est-ce que tu utilises le service de livraison à domicile ?',
        answers: [
            'Je préfère faire mes courses dans mon quartier pour rencontrer les marchands.',
            'De temps en temps, je commande quelques articles en ligne mais toujours dans mon quartier.',
            'Je sais qu’il faudrait privilégier les petits commerçants mais je n’ai pas le temps de faire  mes courses dans le quartier. Je commande presque tout par Internet sans faire attention chez qui j’achète.',
            'Je préfère commander en ligne sur les sites de grandes marques. Ils me livrent tout gratuitement à la maison.'
        ],
        feedback: 'Si vous ne pouvez peut-être pas toujours vous rendre dans un magasin, utilisez le service de livraison qui, aide le magasin et, en plus, favorise l\'activité des livreurs.'
    },
    {
        question: 'Est-ce que tu mentionnes les noms de petites entreprises sur les réseaux sociaux ?',
        answers: [
            'Souvent, je tague l’endroit où je fais mes courses dans l’intention de montrer à mes amis qu’il y a un endroit super dans notre quartier.',
            'Cela m’arrive de mentionner les noms des entreprises du coin si le service est vraiment exceptionnel.',
            'Parfois, si le vendeur me le demande.',
            'Je n’y pense jamais.'
        ],
        feedback: 'Vos amis et relations font confiance à votre recommandation. Aider les petites entreprises à gagner leur popularité et leur clientèle.'
    },
    {
        question: 'Publies-tu des critiques en ligne ?',
        answers: [
            'Toujours. Les commentaires positifs sont très appréciés par les petits commerçants.',
            'J\'écris parfois des commentaires positifs pour tout le monde.',
            'Si je suis vraiment satisfat(e), je peux faire un effort et rédiger une critique positive. Mais, je n’ai pas le temps de le faire systématiquement.',
            'Jamais. Je n’ai pas le temps d’écrire des commentaires en ligne !'
        ],
        feedback: 'Soutenez une petite entreprise avec un avis gentil. Utilisez autant de détails que possible et ajoutez des photos. Vous pouvez même écrire un autre commentaire lors de votre prochain achat.'
    },
    {
        question: 'Payes-tu lors de la commande ?',
        answers: [
            'Je paye toujours lors de la commande car le commerçant ne doit pas avancer l’argent à ses clients.',
            'Parfois, si le commerçant ne me connait pas, je préfère payer lors de la commande.',
            'Le commerçant doit prendre le risque de ne pas vendre l’article commandé.',
            'Je commande seulement sur les sites Internet. Jamais chez les commerçants.'
        ],
        feedback: 'Payer à l\'avance de sorte à remplir la trésorerie est un petit geste que toute petite entreprise appréciera.'
    },
    {
        question: 'Es-tu prêt à offrir un service gratuit pour aider une petite entreprise ?',
        answers: [
            'Bien sûr. Je peux donner un coup de main aux voisins et aux commerçants.',
            'Pourquoi pas ?! Si c’est vraiment nécessaire.',
            'Je peux offrir une aide à tarif réduit.',
            'Je n’ai pas le temps d’aider les gens gratuitement.'
        ],
        feedback: 'Si une petite entreprise que vous connaissez est en difficulté, offrez des compétences ou des services dans lesquels vous êtes bon. Vous êtes mécanicien, peintre, électricien, comptable, gourou de l\'informatique ? Voyez ce que vous pouvez faire pour les aider.'
    },
    {
        question: 'Est- ce que vous êtes patients lors des achats dans le quartier ?',
        answers: [
            'Je ne m’énerve jamais.',
            'J’essaye de garder mon calme même si parfois il y a des problèmes lors de ma commande.',
            'Parfois, il y a trop d’erreurs. Cela est vraiment irritant.',
            'Si le service est mauvais, je suis très énervé.'
        ],
        feedback: 'Les petites entreprises font très attention à satisfaire leurs clients mais parfois elles sont plus lentes que d’habitude à cause des problèmes divers. Donnez-leur un peu de temps afin de régler le souci.'
    },
    {
        question: 'Est- ce que tu es un client régulier ou ponctuel ?',
        answers: [
            'Je fais toujours mes courses chez les mêmes commerçants.Ils peuvent compter sur moi !',
            'Je préfère faire mes courses chez les petits commerçants mais pas toujours chez  les mêmes.',
            'Cela dépend des promotions.Je vais toujours chez le moins cher.',
            'Je n’ai pas de magasin préféré.'
        ],
        feedback: 'Une petite entreprise survit grâce à ses clients réguliers et ponctuels. Mais souvent, en période de crise, elle compte sur ses clients fidèles.'
    }
]

const results = [
    'Tu es un consommateur conscient. Tu sais qu’il est important de soutenir le commerce local afin de promouvoir la vie du quartier. Bravo !',
    'Tu deviens un consommateur conscient.Tu apprends qu’il est important de soutenir le commerce local dans le but de promouvoir la vie du quartier. Tu fais déjà beaucoup d’efforts au quotidien. Continue !',
    'Tu sais qu’il est important d’acheter localement  mais tu n\'es pas encore prêt à faire des efforts dans l’objectif de soutenir les commerçants du quartier.',
    'Pour toi, l\'économie et l’aspect pratique ont plus de valeur que la qualité et le contact humain. Réfléchis comment tu peux commencer à soutenir les gens de ton quartier !'
]

const questionPlaceholder = document.querySelector('.question');
const answersPlaceholders = Array.from(document.querySelectorAll('.answer'));
const questionBox = document.querySelector('.questionBox');
const feedbackBox = document.querySelector('.feedbackBox');
const feedbackPlaceholder = document.querySelector('.feedback');
const nextQuestionBtn = document.querySelector('.nextQuestionBtn');
const resultHeader = document.querySelector('.resultHeader');
const backgrounds = Array.from(document.querySelectorAll('.background'));
const tryAgainBtn = document.querySelector('.tryAgainBtn');

let points = 0;
let lvl = 0;

const answer = (n) => {
    points += n;
    lvl++;

    if(lvl === 10) {
        nextQuestionBtn.textContent = 'Fin de test';
    }

    feedback();
}

const feedback = () => {
    questionBox.style.opacity = '0';
    questionBox.style.zIndex = '-1';
    feedbackBox.style.opacity = '1';
    feedbackBox.style.zIndex = '4';

    feedbackPlaceholder.textContent = questions[lvl-1].feedback;
}

const nextQuestion = () => {
    if(lvl === 10) {
        end()
    }
    else {
        questionPlaceholder.textContent = questions[lvl].question;
        answersPlaceholders.forEach((item, index) => {
            item.textContent = questions[lvl].answers[index]
        });

        questionBox.style.opacity = '1';
        questionBox.style.zIndex = '1';
        feedbackBox.style.opacity = '0';
        feedbackBox.style.zIndex = '-1';
    }
}

const end = () => {
    let res;

    if(points < 10) {
        res = results[3];
    }
    else if(points < 20) {
        res = results[2];
    }
    else if(points < 30) {
        res = results[1];
    }
    else {
        res = results[0];
    }

    backgrounds[0].style.opacity = '0';
    backgrounds[0].style.zIndex = '-1';
    backgrounds[1].style.opacity = '1';
    backgrounds[1].style.zIndex = '3';

    feedbackPlaceholder.textContent = res;
    nextQuestionBtn.style.display = 'none';
    resultHeader.style.visibility = 'visible';
    resultHeader.style.marginBottom = '40px';
    tryAgainBtn.style.visibility = 'visible';
}

const tryAgain = () => {
    points = 0;
    lvl = 0;

    nextQuestionBtn.style.display = 'block';
    resultHeader.style.visibility = 'hidden';
    resultHeader.style.marginBottom = '0';
    tryAgainBtn.style.visibility = 'hidden';

    nextQuestionBtn.textContent = 'Question suivante';

    backgrounds[0].style.opacity = '1';
    backgrounds[0].style.zIndex = '1';
    backgrounds[1].style.opacity = '0';
    backgrounds[1].style.zIndex = '-1';

    nextQuestion();
}

nextQuestion(); // start game
