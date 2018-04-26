define(['vue', 'common', "jquery"], function(Vue, common, $) {
	common.test();

	var v = new Vue({
		el: "#main",
		data: {
			user_name: "",
			user_passward_shown: "",
			user_passward: "",
			showPassword: false,
			menu: 1,
			users: [{name: "testUser"}],
			images: []
		},
			
		methods: {
			uploadImage(e) {
				$('input[type=file]').trigger('click');
				return false;
			},

			onFileChange(e) {
				var files = e.target.files || e.dataTransfer.files;

				if(files.length > 0) {
					return this.addImage(files);
				}
			},

			addImage(file) {
				var reader = null;
				var leng = file.length;
				for(var i = 0; i < leng; i++) {
					reader = new window.FileReader()
					reader.readAsDataURL(file[i])
					reader.onload = function(e) {
						v.images.push(e.target.result);
					}
				}
			},

			submit: function(e) {
				var user = {
					name: v.user_name,
					passpord: v.user_passward
				};
				
				console.log(v.showPassword);
				console.log(user);
				
				//v.products.push(product);
			},

			openMenu: function(n) {
				v.menu = n;
			}
		}
	});
});