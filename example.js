window.onload = main;

function main (){
	var pointA = {
	  x: 3,
	  y: 5
	}

	var pointB = {
	  x: 1,
	  y: 1
	}

	var pointC = pointA;

	var tw = new TWUnit();
	tw.addAssert("Points 1", pointA === pointB, "Are Equals!!", "Aren't equals, what a pity :(");
	tw.addAssert("Points 2", pointA === pointC, "Are Equals!!", "Aren't equals, what a pity :(");
	tw.addAssert("Points 3", pointB === pointC, "Are Equals!!", "Aren't equals, what a pity :(");
	tw.addModule("Points Module");

	tw.addAssert("Sum 1", sum(2,3) == 3, "Very Good!", "Do you know how to sum numbers?");
	tw.addAssert("Sum 2", sum(2,3) == 4, "Very Good!", "Do you know how to sum numbers?");
	tw.addAssert("Sum 3", sum(2,3) == 5, "Very Good!", "Do you know how to sum numbers?");
	tw.addModule("Sum Module");

	tw.runModules();

	if (tw.moduleOk("Points Module"))
		console.log("Points Module are true!");
	else
		console.log("Points Module are false... :(")

	if (tw.modulesOk())
		console.log("All modules are true");
	else
		console.log("You fail...");

}

function sum (number1, number2){
	return number1 + number2;
}