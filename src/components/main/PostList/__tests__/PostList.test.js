import {fireEvent, getByText, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import PostList from '../PostList';


describe('Passes postlist with cat ipsum data', () => {
    
    const postData = [
        { data: {
            title: "I love cuddles i is not fat, i is fluffy lick the other cats 1",
            selftext: "at ipsum dolor sit amet, pee on walls it smells like breakfast. Meow in empty rooms. Groom yourself 4 hours - checked, have your beauty sleep 18 hours - checked, be fabulous for the rest of the day - checked meow meow mama love you, then bite you intrigued by the shower good morning sunshine yet kitty pounce, trip, faceplant you didn't see that no you didn't definitely didn't lick, lick, lick, and preen away the embarrassment. Shove bum in owner's face like camera lens my cat stared at me he was sipping his tea, too but throwup on your pillow. Walk on keyboard brown cats with pink ears for wack the mini furry mouse ooooh feather moving feather!. Cry louder at reflection. This human feeds me, i should be a god howl uncontrollably for no reason. Need to check on human, have not seen in an hour might be dead oh look, human is alive, hiss at human, feed me cat cat moo moo lick ears lick paws so claws in your leg, yet human give me attention meow or stare at ceiling sniff catnip and act crazy munch on tasty moths. Human clearly uses close to one life a night no one naps that long so i revive by standing on chestawaken! munch on tasty moths. Rub butt on table spot something, big eyes, big eyes, crouch, shake butt, prepare to pounce don't nosh on the birds. You have cat to be kitten me right meow. Hey! you there, with the hands find box a little too small and curl up with fur hanging out drink water out of the faucet spill litter box, scratch at owner, destroy all furniture, especially couch so go crazy with excitement when plates are clanked together signalling the arrival of cat food or bring your owner a dead bird claws in your leg.",
            image: "http://placekitten.com/200/200"
        }},
        { data: {
            title: "Quo in",
            selftext: "Cat ipsum dolor sit amet, commodi enim. Incidunt aliquam fugit deserunt or laboris. Perspiciatis nesciunt or laboriosam reprehenderit beatae elit. Incididunt consectetur nemo. Consectetur eius for minim dolor, exercitationem vitae yet eius. Dolores illum. Velitesse cillum dolor and fugit non sint but sunt. Mollit. Incidunt ad yet enim. Sunt.",
            image: "http://placekitten.com/200/200"
        }}
    ]

    beforeEach(() => {
        render(<PostList posts={postData} />)
    })

    test('renders cat ipsum', () => {
        expect(screen.getByText(/Quo in/)).toBeInTheDocument()
        expect(screen.getByText(/Meow in empty rooms/)).toBeInTheDocument();
    })

});

    
  