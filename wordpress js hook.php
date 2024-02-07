function wpb_hook_javascript() {
    ?>
        <script>
          
		
			window.addEventListener("load", (event) => {
				
				const para = document.createElement('p');
				para.classList.add("header-phone");
				para.innerHTML = '<a href="tel:000000000">000.000.0000</a>';
				const innerContainer = document.querySelector('.inner-container');
				innerContainer.appendChild(para);
				
  			console.log("window loaded");
			});
			
        </script>
    <?php
}
add_action('wp_head', 'wpb_hook_javascript');