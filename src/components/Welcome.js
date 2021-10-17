import React, { useState } from 'react';
import Form from './Form.js';

const Welcome = (x) => {
    const [showForm, setShowForm] = useState(false);
    return (
        <>
            {showForm ?
                <Form />
                :
                <>
                    <div className='windowed'>
                        <h1>
                            Willkommen zum Humboldt4Future-Quiz, das deinen ökologischen Fußabdruck berechnet
                        </h1>
                        In diesem Quiz werden wir dir ein paar Fragen stellen um dir zu zeigen, wie verantwortungsbewusst du mit deiner Umwelt umgehst
                    </div>
                    <div className='windowed'>
                        Am Ende des Quiz' hast du auch die Option deine Ergebnisse mit uns zu teilen.<br />
                        Das ganze geschieht natürlich 100% Anonym und niemand wird deine Angaben auf dich zurückverfolgen können;<br />
                        Deine Angaben werden einzig und allein dafür genutzt uns einen Überblick über das Umweltbewusstsein an unserer Schule und anderen zu geben.<br />
                        Falls du dich davon selbst überzeugen möchtest gibt es am Ende einen Link über den du unseren Code einsehen kannst
                    </div>
                    <div className='windowed'>
                        <button onClick={() => setShowForm(true)}>
                            Weiter zum Quiz
                        </button>
                    </div>
                </>
            }
        </>
    );
};

export default Welcome;