
// add listener to show project
const sections = document.querySelectorAll( "section" );
for ( const section of sections) {
    section.addEventListener( 'click', event => {
        if ( event.target.classList.value === 'transform-link' ) {
            section.querySelector( '.project' ).classList.toggle( 'shown' );
            section.querySelector( '.web-design__visual' ).classList.toggle( 'move-out-right' );
            if ( section.querySelector( '.project' ).classList.contains('shown') ) {
                console.log("it is happening")
                section.querySelector( '.transform-link' ).innerText = "Seen enough!"
            } else {
                section.querySelector( '.transform-link' ).innerText = "Check it out"
            }
        }
    } )
};
