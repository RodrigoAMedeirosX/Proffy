import React from 'react';


import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars1.githubusercontent.com/u/67204264?s=460&u=350b27c6be1b27add0e15ebfc42ada65308c91c7&v=4" />
                <div>
                    <strong>Rodrigo A Medeiros</strong>
                    <span>Tecnologia</span>
                </div>
            </header>
            <p>
                Entusiasta das melhores tecnologias.
            <br /><br />
            Apaixonado por tecnologia, pela esposa Leidiane e o filho Gabriel.
        </p>
            <footer>
                <p>
                    <strong>R$ Unknown</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp" />
                Entrar em contato
            </button>
            </footer>
        </article>


    )
}
export default TeacherItem;