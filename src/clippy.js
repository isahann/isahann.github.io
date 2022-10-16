clippy.BASE_PATH = "resources/clippy/agents/";

var clippyAgent;

clippy.load("Clippy", (agent) => {
	agent.moveTo(700, 200);
	agent.play("Greeting");
	agent.speak("Hello!");
	clippyAgent = agent;
});
