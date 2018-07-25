// fade.animation.ts
import {trigger, animate, style, group, animateChild, query, stagger, transition} from '@angular/animations';



export const fadeAnimation =

    trigger('fadeAnimation', [

        transition( '* <=> *', [

            query(':enter', 
                [
                    style({ opacity: 0 })
                ], 
                { optional: true }
            ),

            query(':leave', 
                [
                    style({ opacity: 1 }),
                    animate('0.4s', style({ opacity: 0 }))
                ], 
                { optional: true }
            ),

            query(':enter', 
                [
                    style({ opacity: 0 }),
                    animate('0.4s', style({ opacity: 1 }))
                ], 
                { optional: true }
            )

        ])

    ]);
    export const routerTransition = trigger('routerTransition', [
        transition('* <=> *', [
          query(':enter, :leave', style({  })
            , { optional: true }),
          query('.block', style({ opacity: 0 })
            , { optional: true }),
          group([
            query(':enter', [
              
              animate('0.3s ease-in-out', style({ }))
            ], { optional: true }),
            query(':leave', [
             
              animate('0.3s ease-in-out', style({  }))
            ], { optional: true }),
          ]),
          query(':enter .block', stagger(400, [
           
            animate('.5s ease-in-out', style({  opacity: 1 })),
          ]), { optional: true }),
        ])
      ]);