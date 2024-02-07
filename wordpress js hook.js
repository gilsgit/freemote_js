function wpb_hook_javascript() {
    ?>
        <script>
          
		
			window.addEventListener("load", (event) => {
				
				const para = document.createElement("p");
				para.innerHTML = '<a href="tel:9055633882" class="header-phone">905.563.3882</a>';
				const innerContainer = document.querySelector('.inner-container');
				innerContainer.appendChild(para);
  			console.log("window loaded");
			});
			
        </script>
    <?php
}
add_action('wp_head', 'wpb_hook_javascript');