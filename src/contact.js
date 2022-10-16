const redirectList = [
	{
		message: "Sending you to email me...",
		link: "mailto:isahanacleto@gmail.com",
	},
	{
		message: "Sending you to my LinkedIn...",
		link: "https://www.linkedin.com/in/isahann-hanacleto/",
	},
	{
		message: "Sending you to my GitHub...",
		link: "https://github.com/isahann",
	},
];

function redirect(index) {
	const redirect = redirectList[index];
	const defaultTimeout = 5000;
	const defaultAnimation = "SendMail";

	clippyAgent.speak(redirect.message);
	clippyAgent.play(defaultAnimation);

	setTimeout(() => {
		window.location.replace(redirect.link);
	}, defaultTimeout);
}
