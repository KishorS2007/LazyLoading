import { useEffect, useState } from "react";

import MyRouter from "../Router";
function Page2(){
    const [toggler,Settoggler] = useState(false);
    useEffect(()=>{
        // console.log(toggler);
    },[toggler])
    return(<>
    <div className="Parent">
    <MyRouter toggle={toggler}/>
    <div className="rightside" >
    <h1>
    <i className="fa fa-bars" role="button" onClick={()=>{Settoggler(prev=>!prev)}}></i>
        LAZY LOADING</h1>
        <p>Earth, the third planet from the Sun, is the only known celestial body to support life. Its unique combination of atmosphere, water, and suitable temperatures has allowed a diverse range of ecosystems to flourish. The planet's surface is approximately 71% water, primarily in the form of oceans, which play a crucial role in regulating the climate and supporting marine life. The remaining 29% consists of continents and islands, featuring varied landscapes such as mountains, deserts, forests, and plains.

Earth's atmosphere is composed mainly of nitrogen and oxygen, with trace amounts of other gases like carbon dioxide and argon. This composition is essential for respiration in animals and photosynthesis in plants. The presence of liquid water, a stable climate, and a protective magnetic field further contribute to the planet's habitability.

Over billions of years, Earth has undergone significant geological transformations, including the shifting of tectonic plates, volcanic activity, and erosion. These processes have shaped the planet's surface and contributed to the formation of natural resources. The dynamic nature of Earth's geology continues to influence its environment and the life it supports.

Human activities have had a profound impact on Earth, leading to environmental challenges such as deforestation, pollution, and climate change. These issues threaten biodiversity and the health of ecosystems. Addressing these challenges requires global cooperation and sustainable practices to ensure the planet's well-being for future generations.

In conclusion, Earth is a remarkable planet with the unique ability to support life. Its diverse ecosystems and natural resources are invaluable, and it is imperative to protect and preserve the environment to maintain the delicate balance that sustains all living organisms.Earth, the third planet from the Sun, is the only known celestial body to support life. Its unique combination of atmosphere, water, and suitable temperatures has allowed a diverse range of ecosystems to flourish. The planet's surface is approximately 71% water, primarily in the form of oceans, which play a crucial role in regulating the climate and supporting marine life. The remaining 29% consists of continents and islands, featuring varied landscapes such as mountains, deserts, forests, and plains.

Earth's atmosphere is composed mainly of nitrogen and oxygen, with trace amounts of other gases like carbon dioxide and argon. This composition is essential for respiration in animals and photosynthesis in plants. The presence of liquid water, a stable climate, and a protective magnetic field further contribute to the planet's habitability.

Over billions of years, Earth has undergone significant geological transformations, including the shifting of tectonic plates, volcanic activity, and erosion. These processes have shaped the planet's surface and contributed to the formation of natural resources. The dynamic nature of Earth's geology continues to influence its environment and the life it supports.

Human activities have had a profound impact on Earth, leading to environmental challenges such as deforestation, pollution, and climate change. These issues threaten biodiversity and the health of ecosystems. Addressing these challenges requires global cooperation and sustainable practices to ensure the planet's well-being for future generations.

In conclusion, Earth is a remarkable planet with the unique ability to support life. Its diverse ecosystems and natural resources are invaluable, and it is imperative to protect and preserve the environment to maintain the delicate balance that sustains all living organisms.Earth, the third planet from the Sun, is the only known celestial body to support life. Its unique combination of atmosphere, water, and suitable temperatures has allowed a diverse range of ecosystems to flourish. The planet's surface is approximately 71% water, primarily in the form of oceans, which play a crucial role in regulating the climate and supporting marine life. The remaining 29% consists of continents and islands, featuring varied landscapes such as mountains, deserts, forests, and plains.

Earth's atmosphere is composed mainly of nitrogen and oxygen, with trace amounts of other gases like carbon dioxide and argon. This composition is essential for respiration in animals and photosynthesis in plants. The presence of liquid water, a stable climate, and a protective magnetic field further contribute to the planet's habitability.

Over billions of years, Earth has undergone significant geological transformations, including the shifting of tectonic plates, volcanic activity, and erosion. These processes have shaped the planet's surface and contributed to the formation of natural resources. The dynamic nature of Earth's geology continues to influence its environment and the life it supports.

Human activities have had a profound impact on Earth, leading to environmental challenges such as deforestation, pollution, and climate change. These issues threaten biodiversity and the health of ecosystems. Addressing these challenges requires global cooperation and sustainable practices to ensure the planet's well-being for future generations.

In conclusion, Earth is a remarkable planet with the unique ability to support life. Its diverse ecosystems and natural resources are invaluable, and it is imperative to protect and preserve the environment to maintain the delicate balance that sustains all living organisms.</p>

    </div>
    </div>
    </>)
}

export default Page2;