# MusclePong

Inspiration
Currently, now that gas costs a lot so do ping pong tables, but sometimes you still want that physical exercise while balling on a budget. So, after trying to accumulate all of our ideas with the theme of NatHacks, we have the Brain Wave Authentication MusclePong.

What it does
We created a web page that accepts brain waves as input and the first and last name of the user. Using Tensorflow, we built a neural network that would attempt to classify the user, logging them into the system. This is very secure, as hackers really don't wanna go through the pain of replicating a brain wave. Playing Muscle Pong has never been more secure!

A BioAmp EXG Pill will be attached to the arm of the users and then linked up to the server which processes the incoming data. Data will be streamed using sockets to the front-end web page which will display the pong game. Players will contract their arms to move the paddle up and down!

How we built it
We build the front end using React and Typescript. The backend server was made with Flask and then the ML model was made using Tensorflow. For Muscle Pong, the BioAmp EXG pill feeds data into a csv which is cleaned and reshaped with a Python script.

Challenges we ran into
Cleaning data and training data with the brain waves was messy and the accuracy of our model was abysmal. Although, if we were given enough data and time, we would be able to collect sufficient data from multiple participants to train our CNN. So we decided that we should mainly focus on our MusclePong game!

Accomplishments that we're proud of
We are proud of being able to parse our brain data and being able to input and send data to our Flask backend. We were also proud of being able to run and train our model on the csv files!

What we learned
This was the first time that many of us played with hardware in a project, especially the hardware that dealt with processing bio-signals! Typescript, TensorFlow, and React were near technologies that were used and were new for many of our group members!

What's next for MusclePong
Muscle Pong needs more resources in terms of the image data so that we are able to get greater accuracy with the brain authentication. We would also like funding from NatHacks and other very wealthy sponsors so that maybe next time we can be dripped out when presenting our amazing product!!! THANK YOU FOR YOUR TIME!!!!!!!!!!!!!!!!!!!