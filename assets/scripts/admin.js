( function( $ ) {
    const { adminajax } = adminData; // eslint-disable-line no-var

    $( 'body' ).on( 'click', '.editor-preview-dropdown__toggle', function() {
        // hide preview dropdown
        $( this ).removeAttr( 'aria-haspopup aria-expanded' );
        $( '.components-dropdown__content' ).hide();

        $.ajax( {
            type: 'get',
            url: adminajax,
            data: {
                action: 'create_preview_request',
            },
            success: ( response ) => {
                if ( response.success ) {
                    $( response.data ).appendTo( 'body' ).submit().remove();
                }

                if ( ! response.success ) {
                    const error = $('<div>', {
                        class: 'components-notice-list'
                    }).append(
                        $('<div>', {
                            class: 'components-notice is-error'
                        }).append(
                            $('<div>', {
                                class: 'components-notice__content'
                            }).text(response.data)
                        )
                    );

                    $( '.interface-interface-skeleton__content' ).prepend( error );
                }
            },
        } );
    } );
}( jQuery, window._ ) );
