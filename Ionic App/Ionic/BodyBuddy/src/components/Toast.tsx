export function toast(message:string, duration = 1500) {
	const toast = document.createElement('ion-toast');
	toast.message = message;
	toast.duration = duration;
  
	document.body.appendChild(toast);
	return toast.present();
}