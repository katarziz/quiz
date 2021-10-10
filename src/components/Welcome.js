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
                    Welcome to the Humboldt4Future quiz on your ecological footprint
                </div>
                <div className='windowed'>
                    <div>
                        In this quiz you will be facing 14 questions with 3 options.
                    </div>
                    If you you choose to submit your score you agree with us receiving your answers and score anonymously.
                    <button onClick={() => setShowForm(true)}>
                        continue to the quiz
                    </button>
                </div>
                </>
            }
        </>
    );
};

export default Welcome;