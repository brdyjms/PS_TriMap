PS_TriMap
Create a TriMap Material from Photoshop Layers

This script automates the process of creating a TriMap material by combining three of your Photoshop layers into a new layer using their grayscale values.

How It Works:
	
	The script takes the three bottom-most layers in your file and assigns each to a different RGB channel in a new layer named TriMap:
	
	Red Channel: The third layer from the bottom
	Green Channel: The second layer from the bottom
	Blue Channel: The bottom layer



Instructions:

	Install the Script:
	
		Copy the Layers - TriMap Maker.jsx file into Photoshop’s Scripts folder.
			Typically located at:
			C:\Program Files\Adobe\Adobe Photoshop ####\Presets\Scripts
			(Replace #### with your Photoshop version.)
		
		Alternatively, you can save it anywhere you like and browse for the script when running it.
	

	Prepare Your Layers:
		
		Open the three grayscale maps you want to use in Photoshop and copy them into the same file.
			(Tip: You can use File > Scripts > Load Files Into Stack to automate this step.)
		
		If you only have two grayscale maps, create a third layer and fill it with white.
		
		Arrange the layers in the order you want them to appear:
		
		3rd from the bottom → Red Channel
		2nd from the bottom → Green Channel
		Bottom layer → Blue Channel
	

	Run the Script:
	
		Go to File > Scripts and select the script (if you copied it to the Photoshop Scripts folder), or
	
		Go to File > Scripts > Browse and locate the script if you saved it elsewhere.
		
	
	Wait for the Result:
		
		The script will create a new layer where the Red, Green, and Blue channels match the grayscale values of the layers you arranged.
		Save Your File:
		
		Save your file as a .jpg or .png — it’s now ready for use in your rendering software.
	
	
	
	
	
Important Note:

	The script does not include error checking. To ensure the best results:
		Make sure you have at least three layers with only grayscale information.
