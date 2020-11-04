/**************************** 
 * Change-Localization Test *
 ****************************/

import { PsychoJS } from './lib/core-2020.1.js';
import * as core from './lib/core-2020.1.js';
import { TrialHandler } from './lib/data-2020.1.js';
import { Scheduler } from './lib/util-2020.1.js';
import * as util from './lib/util-2020.1.js';
import * as visual from './lib/visual-2020.1.js';
import * as sound from './lib/sound-2020.1.js';

// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0, 0, 0]),
  units: 'height',
  waitBlanking: true
});

// store info about the experiment session:
let expName = 'change-localization';  // from the Builder filename that created this script
let expInfo = {'participant': '', 'session': '001'};

// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(instructionsRoutineBegin());
flowScheduler.add(instructionsRoutineEachFrame());
flowScheduler.add(instructionsRoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin, trialsLoopScheduler);
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  });


var frameDur;
function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2020.1.2';
  expInfo['OS'] = window.navigator.platform;

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  
  return Scheduler.Event.NEXT;
}


var instructionsClock;
var text;
var intro_mouse;
var arrayClock;
var fixA;
var stim1;
var stim2;
var stim3;
var stim4;
var stim5;
var probeClock;
var fixB;
var mouse;
var probe1;
var probe2;
var probe3;
var probe4;
var probe5;
var feedbackClock;
var probe1_copy;
var probe2_copy;
var probe3_copy;
var probe4_copy;
var probe5_copy;
var click_copy;
var globalClock;
var routineTimer;
function experimentInit() {
  // Initialize components for Routine "instructions"
  instructionsClock = new util.Clock();
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: 'You are about to begin a visual memory task.\n\nIn each trial, you will see random set of five colored squares for brief moment then the squares will dissapear. \n\nAfter a short delay, the squares will reappear, but one of the squares will have a different color than before.\n\nPlease use your mouse to click on the square that changed color. \n\nAlso, please try to look at the center of the screen throughout the experiment. \n\nGood luck!\n\nClick anywhere on the screen when you are ready to begin.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.025,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  intro_mouse = new core.Mouse({
    win: psychoJS.window,
  });
  intro_mouse.mouseClock = new util.Clock();
  // Initialize components for Routine "array"
  arrayClock = new util.Clock();
  fixA = new visual.ShapeStim ({
    win: psychoJS.window, name: 'fixA', 
    vertices: 'cross', size:[0.05, 0.05],
    ori: 0, pos: [0, 0],
    lineWidth: 0.5, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: 0, interpolate: true,
  });
  
  stim1 = new visual.Rect ({
    win: psychoJS.window, name: 'stim1', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color(1.0),
    fillColor: new util.Color(1.0),
    opacity: 1, depth: -1, interpolate: true,
  });
  
  stim2 = new visual.Rect ({
    win: psychoJS.window, name: 'stim2', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color(1.0),
    fillColor: new util.Color(1.0),
    opacity: 1, depth: -2, interpolate: true,
  });
  
  stim3 = new visual.Rect ({
    win: psychoJS.window, name: 'stim3', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color(1.0),
    fillColor: new util.Color(1.0),
    opacity: 1, depth: -2, interpolate: true,
  });
  
  stim4 = new visual.Rect ({
    win: psychoJS.window, name: 'stim4', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color(1.0),
    fillColor: new util.Color(1.0),
    opacity: 1, depth: -2, interpolate: true,
  });
  
  stim5 = new visual.Rect ({
    win: psychoJS.window, name: 'stim5', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color(1.0),
    fillColor: new util.Color(1.0),
    opacity: 1, depth: -2, interpolate: true,
  });
  
  // Initialize components for Routine "probe"
  probeClock = new util.Clock();
  fixB = new visual.ShapeStim ({
    win: psychoJS.window, name: 'fixB', 
    vertices: 'cross', size:[0.05, 0.05],
    ori: 0, pos: [0, 0],
    lineWidth: 0.5, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: 0, interpolate: true,
  });
  
  mouse = new core.Mouse({
    win: psychoJS.window,
  });
  mouse.mouseClock = new util.Clock();
  probe1 = new visual.Rect ({
    win: psychoJS.window, name: 'probe1', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color(1.0),
    fillColor: new util.Color(1.0),
    opacity: 1, depth: -2, interpolate: true,
  });
  
  probe2 = new visual.Rect ({
    win: psychoJS.window, name: 'probe2', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color(1.0),
    fillColor: new util.Color(1.0),
    opacity: 1, depth: -3, interpolate: true,
  });
  
  probe3 = new visual.Rect ({
    win: psychoJS.window, name: 'probe3', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color(1.0),
    fillColor: new util.Color(1.0),
    opacity: 1, depth: -3, interpolate: true,
  });
  
  probe4 = new visual.Rect ({
    win: psychoJS.window, name: 'probe4', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color(1.0),
    fillColor: new util.Color(1.0),
    opacity: 1, depth: -3, interpolate: true,
  });
  
  probe5 = new visual.Rect ({
    win: psychoJS.window, name: 'probe5', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color(1.0),
    fillColor: new util.Color(1.0),
    opacity: 1, depth: -3, interpolate: true,
  });
  
  // Initialize components for Routine "feedback"
  feedbackClock = new util.Clock();
  probe1_copy = new visual.Rect ({
    win: psychoJS.window, name: 'probe1_copy', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color(1.0),
    fillColor: new util.Color(1.0),
    opacity: 1, depth: -2, interpolate: true,
  });
  
  probe2_copy = new visual.Rect ({
    win: psychoJS.window, name: 'probe2_copy', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color(1.0),
    fillColor: new util.Color(1.0),
    opacity: 1, depth: -3, interpolate: true,
  });
  
  probe3_copy = new visual.Rect ({
    win: psychoJS.window, name: 'probe3_copy', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color(1.0),
    fillColor: new util.Color(1.0),
    opacity: 1, depth: -3, interpolate: true,
  });
  
  probe4_copy = new visual.Rect ({
    win: psychoJS.window, name: 'probe4_copy', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color(1.0),
    fillColor: new util.Color(1.0),
    opacity: 1, depth: -3, interpolate: true,
  });
  
  probe5_copy = new visual.Rect ({
    win: psychoJS.window, name: 'probe5_copy', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color(1.0),
    fillColor: new util.Color(1.0),
    opacity: 1, depth: -3, interpolate: true,
  });
  
  click_copy = new visual.ShapeStim ({
    win: psychoJS.window, name: 'click_copy', 
    vertices: 'star7', size: [0.05, 0.05],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: 0.9, depth: -5, interpolate: true,
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var gotValidClick;
var instructionsComponents;
function instructionsRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'instructions'-------
    t = 0;
    instructionsClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    // setup some python lists for storing info about the intro_mouse
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    instructionsComponents = [];
    instructionsComponents.push(text);
    instructionsComponents.push(intro_mouse);
    
    for (const thisComponent of instructionsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


var prevButtonState;
var continueRoutine;
function instructionsRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'instructions'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = instructionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text* updates
    if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }

    // *intro_mouse* updates
    if (t >= 0.0 && intro_mouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      intro_mouse.tStart = t;  // (not accounting for frame time here)
      intro_mouse.frameNStart = frameN;  // exact frame index
      
      intro_mouse.status = PsychoJS.Status.STARTED;
      intro_mouse.mouseClock.reset();
      prevButtonState = intro_mouse.getPressed();  // if button is down already this ISN'T a new click
      }
    if (intro_mouse.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      let buttons = intro_mouse.getPressed();
      if (!buttons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = buttons;
        if (buttons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // abort routine on response
          continueRoutine = false;
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instructionsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instructionsRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'instructions'-------
    for (const thisComponent of instructionsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // store data for thisExp (ExperimentHandler)
    // the Routine "instructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var trials;
var currentLoop;
function trialsLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  trials = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'trials.csv',
    seed: undefined, name: 'trials'
  });
  psychoJS.experiment.addLoop(trials); // add the loop to the experiment
  currentLoop = trials;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisTrial of trials) {
    const snapshot = trials.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(arrayRoutineBegin(snapshot));
    thisScheduler.add(arrayRoutineEachFrame(snapshot));
    thisScheduler.add(arrayRoutineEnd(snapshot));
    thisScheduler.add(probeRoutineBegin(snapshot));
    thisScheduler.add(probeRoutineEachFrame(snapshot));
    thisScheduler.add(probeRoutineEnd(snapshot));
    thisScheduler.add(feedbackRoutineBegin(snapshot));
    thisScheduler.add(feedbackRoutineEachFrame(snapshot));
    thisScheduler.add(feedbackRoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function trialsLoopEnd() {
  psychoJS.experiment.removeLoop(trials);

  return Scheduler.Event.NEXT;
}


var arrayComponents;
function arrayRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'array'-------
    t = 0;
    arrayClock.reset(); // clock
    frameN = -1;
    routineTimer.add(2.000000);
    // update component parameters for each repeat
    stim1.setPos([x1, y1]);
    stim1.setSize([width, height]);
    stim1.setFillColor(new util.Color(stim_color1));
    stim1.setLineColor(new util.Color(stim_color1));
    stim2.setPos([x2, y2]);
    stim2.setSize([width, height]);
    stim2.setFillColor(new util.Color(stim_color2));
    stim2.setLineColor(new util.Color(stim_color2));
    stim3.setPos([x3, y3]);
    stim3.setSize([width, height]);
    stim3.setFillColor(new util.Color(stim_color3));
    stim3.setLineColor(new util.Color(stim_color3));
    stim4.setPos([x4, y4]);
    stim4.setSize([width, height]);
    stim4.setFillColor(new util.Color(stim_color4));
    stim4.setLineColor(new util.Color(stim_color4));
    stim5.setPos([x5, y5]);
    stim5.setSize([width, height]);
    stim5.setFillColor(new util.Color(stim_color5));
    stim5.setLineColor(new util.Color(stim_color5));
    // keep track of which components have finished
    arrayComponents = [];
    arrayComponents.push(fixA);
    arrayComponents.push(stim1);
    arrayComponents.push(stim2);
    arrayComponents.push(stim3);
    arrayComponents.push(stim4);
    arrayComponents.push(stim5);
    
    for (const thisComponent of arrayComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


var frameRemains;
function arrayRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'array'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = arrayClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fixA* updates
    if (t >= 0.0 && fixA.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fixA.tStart = t;  // (not accounting for frame time here)
      fixA.frameNStart = frameN;  // exact frame index
      
      fixA.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (fixA.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fixA.setAutoDraw(false);
    }
    
    // *stim1* updates
    if (t >= 1 && stim1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stim1.tStart = t;  // (not accounting for frame time here)
      stim1.frameNStart = frameN;  // exact frame index
      
      stim1.setAutoDraw(true);
    }

    frameRemains = 1 + 1 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (stim1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      stim1.setAutoDraw(false);
    }
    
    // *stim2* updates
    if (t >= 1 && stim2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stim2.tStart = t;  // (not accounting for frame time here)
      stim2.frameNStart = frameN;  // exact frame index
      
      stim2.setAutoDraw(true);
    }

    frameRemains = 1 + 1 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (stim2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      stim2.setAutoDraw(false);
    }
    
    // *stim3* updates
    if (t >= 1 && stim3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stim3.tStart = t;  // (not accounting for frame time here)
      stim3.frameNStart = frameN;  // exact frame index
      
      stim3.setAutoDraw(true);
    }

    frameRemains = 1 + 1 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (stim3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      stim3.setAutoDraw(false);
    }
    
    // *stim4* updates
    if (t >= 1 && stim4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stim4.tStart = t;  // (not accounting for frame time here)
      stim4.frameNStart = frameN;  // exact frame index
      
      stim4.setAutoDraw(true);
    }

    frameRemains = 1 + 1 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (stim4.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      stim4.setAutoDraw(false);
    }
    
    // *stim5* updates
    if (t >= 1 && stim5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stim5.tStart = t;  // (not accounting for frame time here)
      stim5.frameNStart = frameN;  // exact frame index
      
      stim5.setAutoDraw(true);
    }

    frameRemains = 1 + 1 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (stim5.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      stim5.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of arrayComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function arrayRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'array'-------
    for (const thisComponent of arrayComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


var probeComponents;
function probeRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'probe'-------
    t = 0;
    probeClock.reset(); // clock
    frameN = -1;
    routineTimer.add(8.000000);
    // update component parameters for each repeat
    // setup some python lists for storing info about the mouse
    // current position of the mouse:
    mouse.x = [];
    mouse.y = [];
    mouse.leftButton = [];
    mouse.midButton = [];
    mouse.rightButton = [];
    mouse.time = [];
    mouse.clicked_name = [];
    mouse.clicked_pos = [];
    gotValidClick = false; // until a click is received
    probe1.setPos([x1, y1]);
    probe1.setSize([width, height]);
    probe1.setFillColor(new util.Color(probe_color1));
    probe1.setLineColor(new util.Color(probe_color1));
    probe2.setPos([x2, y2]);
    probe2.setSize([width, height]);
    probe2.setFillColor(new util.Color(probe_color2));
    probe2.setLineColor(new util.Color(probe_color2));
    probe3.setPos([x3, y3]);
    probe3.setSize([width, height]);
    probe3.setFillColor(new util.Color(probe_color3));
    probe3.setLineColor(new util.Color(probe_color3));
    probe4.setPos([x4, y4]);
    probe4.setSize([width, height]);
    probe4.setFillColor(new util.Color(probe_color4));
    probe4.setLineColor(new util.Color(probe_color4));
    probe5.setPos([x5, y5]);
    probe5.setSize([width, height]);
    probe5.setFillColor(new util.Color(probe_color5));
    probe5.setLineColor(new util.Color(probe_color5));
    // keep track of which components have finished
    probeComponents = [];
    probeComponents.push(fixB);
    probeComponents.push(mouse);
    probeComponents.push(probe1);
    probeComponents.push(probe2);
    probeComponents.push(probe3);
    probeComponents.push(probe4);
    probeComponents.push(probe5);
    
    for (const thisComponent of probeComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function probeRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'probe'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = probeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fixB* updates
    if (t >= 0.0 && fixB.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fixB.tStart = t;  // (not accounting for frame time here)
      fixB.frameNStart = frameN;  // exact frame index
      
      fixB.setAutoDraw(true);
    }

    frameRemains = 0.0 + 4 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (fixB.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fixB.setAutoDraw(false);
    }
    // *mouse* updates
    if (t >= 4 && mouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse.tStart = t;  // (not accounting for frame time here)
      mouse.frameNStart = frameN;  // exact frame index
      
      mouse.status = PsychoJS.Status.STARTED;
      mouse.mouseClock.reset();
      prevButtonState = mouse.getPressed();  // if button is down already this ISN'T a new click
      }
    frameRemains = 4 + 4 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (mouse.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      mouse.status = PsychoJS.Status.FINISHED;
  }
    if (mouse.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      let buttons = mouse.getPressed();
      if (!buttons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = buttons;
        if (buttons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          const xys = mouse.getPos();
          mouse.x.push(xys[0]);
          mouse.y.push(xys[1]);
          mouse.leftButton.push(buttons[0]);
          mouse.midButton.push(buttons[1]);
          mouse.rightButton.push(buttons[2]);
          mouse.time.push(mouse.mouseClock.getTime());
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [probe1,probe2,probe3,probe4,probe5]) {
            if (obj.contains(mouse)) {
              gotValidClick = true;
              mouse.clicked_name.push(obj.name)
              mouse.clicked_pos.push(obj.pos)
            }
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    
    // *probe1* updates
    if (t >= 4 && probe1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      probe1.tStart = t;  // (not accounting for frame time here)
      probe1.frameNStart = frameN;  // exact frame index
      
      probe1.setAutoDraw(true);
    }

    frameRemains = 4 + 4 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (probe1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      probe1.setAutoDraw(false);
    }
    
    // *probe2* updates
    if (t >= 4 && probe2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      probe2.tStart = t;  // (not accounting for frame time here)
      probe2.frameNStart = frameN;  // exact frame index
      
      probe2.setAutoDraw(true);
    }

    frameRemains = 4 + 4 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (probe2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      probe2.setAutoDraw(false);
    }
    
    // *probe3* updates
    if (t >= 4 && probe3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      probe3.tStart = t;  // (not accounting for frame time here)
      probe3.frameNStart = frameN;  // exact frame index
      
      probe3.setAutoDraw(true);
    }

    frameRemains = 4 + 4 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (probe3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      probe3.setAutoDraw(false);
    }
    
    // *probe4* updates
    if (t >= 4 && probe4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      probe4.tStart = t;  // (not accounting for frame time here)
      probe4.frameNStart = frameN;  // exact frame index
      
      probe4.setAutoDraw(true);
    }

    frameRemains = 4 + 4 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (probe4.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      probe4.setAutoDraw(false);
    }
    
    // *probe5* updates
    if (t >= 4 && probe5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      probe5.tStart = t;  // (not accounting for frame time here)
      probe5.frameNStart = frameN;  // exact frame index
      
      probe5.setAutoDraw(true);
    }

    frameRemains = 4 + 4 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (probe5.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      probe5.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of probeComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function probeRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'probe'-------
    for (const thisComponent of probeComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // store data for thisExp (ExperimentHandler)
    if (mouse.x) {  psychoJS.experiment.addData('mouse.x', mouse.x[0])};
    if (mouse.y) {  psychoJS.experiment.addData('mouse.y', mouse.y[0])};
    if (mouse.leftButton) {  psychoJS.experiment.addData('mouse.leftButton', mouse.leftButton[0])};
    if (mouse.midButton) {  psychoJS.experiment.addData('mouse.midButton', mouse.midButton[0])};
    if (mouse.rightButton) {  psychoJS.experiment.addData('mouse.rightButton', mouse.rightButton[0])};
    if (mouse.time) {  psychoJS.experiment.addData('mouse.time', mouse.time[0])};
    if (mouse.clicked_name) {  psychoJS.experiment.addData('mouse.clicked_name', mouse.clicked_name[0])};
    if (mouse.clicked_pos) {  psychoJS.experiment.addData('mouse.clicked_pos', mouse.clicked_pos[0])};
    
    return Scheduler.Event.NEXT;
  };
}


var feedbackComponents;
function feedbackRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'feedback'-------
    t = 0;
    feedbackClock.reset(); // clock
    frameN = -1;
    routineTimer.add(0.500000);
    // update component parameters for each repeat
    probe1_copy.setPos([x1, y1]);
    probe1_copy.setSize([width, height]);
    probe1_copy.setFillColor(new util.Color(probe_color1));
    probe1_copy.setLineColor(new util.Color(probe_color1));
    probe2_copy.setPos([x2, y2]);
    probe2_copy.setSize([width, height]);
    probe2_copy.setFillColor(new util.Color(probe_color2));
    probe2_copy.setLineColor(new util.Color(probe_color2));
    probe3_copy.setPos([x3, y3]);
    probe3_copy.setSize([width, height]);
    probe3_copy.setFillColor(new util.Color(probe_color3));
    probe3_copy.setLineColor(new util.Color(probe_color3));
    probe4_copy.setPos([x4, y4]);
    probe4_copy.setSize([width, height]);
    probe4_copy.setFillColor(new util.Color(probe_color4));
    probe4_copy.setLineColor(new util.Color(probe_color4));
    probe5_copy.setPos([x5, y5]);
    probe5_copy.setSize([width, height]);
    probe5_copy.setFillColor(new util.Color(probe_color5));
    probe5_copy.setLineColor(new util.Color(probe_color5));
    click_copy.setPos(mouse.clicked_pos);
    // keep track of which components have finished
    feedbackComponents = [];
    feedbackComponents.push(probe1_copy);
    feedbackComponents.push(probe2_copy);
    feedbackComponents.push(probe3_copy);
    feedbackComponents.push(probe4_copy);
    feedbackComponents.push(probe5_copy);
    feedbackComponents.push(click_copy);
    
    for (const thisComponent of feedbackComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function feedbackRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'feedback'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = feedbackClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *probe1_copy* updates
    if (t >= 0 && probe1_copy.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      probe1_copy.tStart = t;  // (not accounting for frame time here)
      probe1_copy.frameNStart = frameN;  // exact frame index
      
      probe1_copy.setAutoDraw(true);
    }

    frameRemains = 0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (probe1_copy.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      probe1_copy.setAutoDraw(false);
    }
    
    // *probe2_copy* updates
    if (t >= 0 && probe2_copy.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      probe2_copy.tStart = t;  // (not accounting for frame time here)
      probe2_copy.frameNStart = frameN;  // exact frame index
      
      probe2_copy.setAutoDraw(true);
    }

    frameRemains = 0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (probe2_copy.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      probe2_copy.setAutoDraw(false);
    }
    
    // *probe3_copy* updates
    if (t >= 0 && probe3_copy.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      probe3_copy.tStart = t;  // (not accounting for frame time here)
      probe3_copy.frameNStart = frameN;  // exact frame index
      
      probe3_copy.setAutoDraw(true);
    }

    frameRemains = 0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (probe3_copy.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      probe3_copy.setAutoDraw(false);
    }
    
    // *probe4_copy* updates
    if (t >= 0 && probe4_copy.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      probe4_copy.tStart = t;  // (not accounting for frame time here)
      probe4_copy.frameNStart = frameN;  // exact frame index
      
      probe4_copy.setAutoDraw(true);
    }

    frameRemains = 0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (probe4_copy.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      probe4_copy.setAutoDraw(false);
    }
    
    // *probe5_copy* updates
    if (t >= 0 && probe5_copy.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      probe5_copy.tStart = t;  // (not accounting for frame time here)
      probe5_copy.frameNStart = frameN;  // exact frame index
      
      probe5_copy.setAutoDraw(true);
    }

    frameRemains = 0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (probe5_copy.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      probe5_copy.setAutoDraw(false);
    }
    
    // *click_copy* updates
    if (t >= 0.0 && click_copy.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      click_copy.tStart = t;  // (not accounting for frame time here)
      click_copy.frameNStart = frameN;  // exact frame index
      
      click_copy.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (click_copy.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      click_copy.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of feedbackComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function feedbackRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'feedback'-------
    for (const thisComponent of feedbackComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


function endLoopIteration(thisScheduler, loop) {
  // ------Prepare for next entry------
  return function () {
    if (typeof loop !== 'undefined') {
      // ------Check if user ended loop early------
      if (loop.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(loop);
        }
      thisScheduler.stop();
      } else {
        const thisTrial = loop.getCurrentTrial();
        if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
          psychoJS.experiment.nextEntry(loop);
        }
      }
    return Scheduler.Event.NEXT;
    }
  };
}


function importConditions(trials) {
  return function () {
    psychoJS.importAttributes(trials.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
