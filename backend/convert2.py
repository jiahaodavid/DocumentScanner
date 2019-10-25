# Import libraries 
from PIL import Image 
import pytesseract
import os

#variable containinght the path of the file that is going to be read 
filename = '/Users/alex/Documents/Projects/PythonCode/pic.png'

#Where to store our ourput text file
outPath =  '/Users/alex/Documents/Projects/PythonCode/out_text.txt'

#open our output file. If file DNE python creates one.
#"w": Write. Python will overwrite any existing content
f = open(outPath, "w")

# Recognize the text as string in image using pytesserct 
text = str(((pytesseract.image_to_string(Image.open(filename))))) 
  
# The recognized text is stored in variable text 
# Any string processing may be applied on text 


print(text)

# Finally, write the processed text to the file. 
f.write(text) 

# Close the file after writing all the text. 
f.close()







'''
must have pytesseract 
to install on Mac, run:
    brew install tesseract

on Linux:
    sudo apt update
    sudo apt install tesseract-ocr
    sudo apt install libtesseract-dev

on Windows:
    check this out
    https://stackoverflow.com/questions/50655738/tesseractnotfounderror
'''