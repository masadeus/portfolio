
// add listener to show project
const sections = document.querySelectorAll( "section" );
for ( const section of sections) {
    section.addEventListener( 'click', event => {
        if ( event.target.classList.value === 'transform-link' ) {
            section.querySelector( '.project' ).classList.toggle( 'shown' );
            section.querySelector( '.web-design__visual' ).classList.toggle( 'move-out-side' );
            if ( section.querySelector( '.project' ).classList.contains('shown') ) {
                section.querySelector( '.transform-link' ).innerText = "Seen enough!"
            } else {
                section.querySelector( '.transform-link' ).innerText = "Check it out"
            }
        }
    } )
};
