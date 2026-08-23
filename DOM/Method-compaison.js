<div id="user" data-role="admin" custom="value">
    <script>
        const div=document.querySelector('#user');
        console.log(div.hasAttributes('id'));
        console.log(div.hasAttributes('data-role'));
        console.log(div.hasAttributes('missing'));

        //get value
        console.log(div.getAttribute('id'));
        console.log(div.getAttribute('custom'));

        //set value
        div.setAttribute('data-role','superadmin');
        div.setAttribute('data-status','active');

        //remove
        div.removeAttribute('custom');
        console.log(div.hasAttribute('custom'));
    </script> 
</div>