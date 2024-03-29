import api from '../../../assets/api.png';
import features from '../../../assets/features.png';
import adapt from '../../../assets/adapt.png';
import collab from '../../../assets/collab.png';

export const cards = [
    {
        header: "API-First Design",
        paragraph: "Mockify.io streamlines API-first design by enabling developers to effortlessly create, manage, and share mock APIs.", 
        image: api,
        link: "https://swagger.io/resources/articles/adopting-an-api-first-approach/", 
        id: 0
    }, 
    {
        header: "Feature-Rich",
        paragraph: "Mockify.io provides a rich set of features that enable developers to quickly create mock APIs.",
        image: features,
        link: "/docs",
        id: 1

    },
    {
        header: "Adaptable",
        paragraph: "Mockify.io adapts to your workflow, not the other way around. Create mock APIs in the way that works best for you.",
        image: adapt,
        link: "/docs",
        id: 2
    },
    {
        header: "Collaborative",
        paragraph: "Mockify.io enables teams to collaborate on mock APIs, making it easy to share and manage mock APIs across your organization.",
        image: collab,
        link: "/docs",
        id:3

    },
]