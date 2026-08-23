<body>
    <div id="elam about=Elephant"></div>
    <script>
        let elam=document.getElementById('elam');
        alert(elam.getAttribute('About'));
        elam.setAttribute('Test',123);
        alert(elam.outerHTML);
        for(let attr of elam.getAttribute){
            alert('${attr.name}=${attr.value}')
        }
    </script>
</body>