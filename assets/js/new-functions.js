
// add listener to show project
const sections = document.querySelectorAll( "section" );
for ( const section of sections) {
    section.addEventListener( 'click', event => {
        if ( event.target.classList.value === 'transform-link' ) {
            section.querySelector( '.project' ).classList.toggle( 'shown' )
            if ( window.innerWidth >= 767 ) {
                section.querySelector( '.web-design__visual' ).classList.toggle( 'move-out-side' )
            }
            if ( section.querySelector( '.project' ).classList.contains('shown') ) {
                section.querySelector( '.transform-link' ).innerText = "Seen enough!"
                if ( window.innerWidth >= 767 ) {
                    section.scrollIntoView( { block: "end", inline: "start" } )
                } else {
                    section.querySelector( ".web-design__content" ).scrollIntoView( { block: "start", inline: "end" } )
                }
            } else {
                section.querySelector( '.transform-link' ).innerText = "Check it out"
            }
        }
    } )
};
