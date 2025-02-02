from tkinter import Tk,Label,Button

root=Tk()
root.gir ("welcome to our bank")
root.title("welcome to our bank")

Label(root, text="welcome!").pack()
Button(root, text="click Me!",command=lambda: print("Hello!")).pack()
root.mainloop()