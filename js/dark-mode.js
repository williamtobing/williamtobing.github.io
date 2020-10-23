
   // dark-mode
   var checkbox = document.querySelector('input[name=theme]');

   if(checkbox !== null) {
	   checkbox.addEventListener('change', function() {
		   if(this.checked) {
			   trans()
			   document.documentElement.setAttribute('data-theme', 'dark')
			   document.querySelectorAll('.inverted').forEach((result) => {
				   result.classList.toggle('invert');
			   })
			   localStorage.setItem('theme', 'dark');
		   } else {
			   trans()
			   document.documentElement.setAttribute('data-theme', 'light')
			   document.querySelectorAll('.inverted').forEach((result) => {
				   result.classList.toggle('invert');
			   });
			   localStorage.setItem('theme', 'light');
		   }
	   });
   }

   if (localStorage.getItem('theme') === 'dark') {
		document.documentElement.setAttribute('data-theme', 'dark')
		document.querySelectorAll('.inverted').forEach((result) => {
			result.classList.toggle('invert');
		})
		checkbox.checked = true;
   } else {
		document.documentElement.setAttribute('data-theme', 'light')
		checkbox.checked = false;
   }

   	let trans = () => {
	   document.documentElement.classList.add('transition');
	   window.setTimeout(() => {
		   document.documentElement.classList.remove('transition')
	   }, 1000)
   }
   