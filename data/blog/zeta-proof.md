---
title: 'Zeta proof'
date: '2022-08-01'
tags: ['Riemann hypothesis','Proof','Math','Number theory']
draft: false
summary: 'When I have made decision about create this blog I decided to write mostly about widely IT and PLC code generation.  
To be honest I really like mathematics-related issues also.
In this article I will try to show my proposition of proof for Riemann hypothesis, that all non-trivial zeros of Zeta[s] has real part equal 1/2.
Full version of my struggles is in attached pdf file. Below I will present shortcut version.'
authors: ['mariusz']
---

# Introduce

When I have made decision about create this blog I decided to write mostly about widely IT and PLC code generation.  
To be honest I really like mathematics-related issues also.
In this article I will try to show my proposition of proof for Riemann hypothesis, that all non-trivial zeros of Zeta[s] has real part equal 1/2.
Full version of my struggles is in attached pdf file. Below I will present shortcut version.

# Transformation

![image](/blog/zeta-proof/Images/1_Visualize.jpg?style=centerme)

Let's create a function to calculate the distance between the start and the end of a polygon.
As in our case shown in image AE.Our input data will be the length of the segment and the
the angle between them.

![image](/blog/zeta-proof/Images/1_Diagonals.jpg?style=centerme)

To make it we need to calculate all previous diagonals and split angles on two parts AX1 and AX2.

![image](/blog/zeta-proof/Maths/X01_General.jpg?style=centerme)

![image](/blog/zeta-proof/Maths/X012_General.jpg?style=centerme)

And Generally

![image](/blog/zeta-proof/Maths/General.jpg?style=centerme)

# X012

We want to calculate identity for X012

![image](/blog/zeta-proof/Maths/X012_General.jpg?style=centerme)

When we combine all together we will get

![image](/blog/zeta-proof/Maths/X012/1.jpg?style=centerme)

Now we want to calculate Cos value and this could be written as:

![image](/blog/zeta-proof/Maths/X012/2.jpg?style=centerme)

Replacing variables according to our purposes

![image](/blog/zeta-proof/Maths/X012/3.jpg?style=centerme)

![image](/blog/zeta-proof/Maths/X012/4.jpg?style=centerme)

![image](/blog/zeta-proof/Maths/X012/5.jpg?style=centerme)

Now we introduce new variables AZ0=A0,AZ1 = SignM(Sin(AZ0))\*A1, and
we replace A1 by AZ1 inside Sin() and in Cos(), because it is symmetric function.

![image](/blog/zeta-proof/Maths/X012/6.jpg?style=centerme)

![image](/blog/zeta-proof/Maths/X012/7.jpg?style=centerme)

# Xn

When we start calculating the value of X0n for the next n we will see:

![image](/blog/zeta-proof/Maths/Xn/General.jpg?style=centerme)

Full proof, that this identity is valid for all N is in pdf version.

# Zeta[s]

![image](/blog/zeta-proof/Maths/Zeta/Definition.jpg?style=centerme)

Our target is to use our previous transformation for Eta function.
To interpret X0n like a distance between 0 and value of Eta.

![image](/blog/zeta-proof/Maths/Zeta/LimXon.jpg?style=centerme)

So we need to calculate input parameters to our transformation.

![image](/blog/zeta-proof/Maths/Zeta/Xn+1.jpg?style=centerme)

To calculate angle between Xn+1 and Xn to cos law,
we need to have distance between Xn+2 and Xn (full calculation in attached pdf file)
![image](/blog/zeta-proof/Maths/Zeta/Xn+2.jpg?style=centerme)

![image](/blog/zeta-proof/Maths/Zeta/An.jpg?style=centerme)

## Transformed Zeta

![image](/blog/zeta-proof/Maths/Zeta/ZetaFormula.jpg?style=centerme)

This equation we can write as a product. Let’s define our ”helper” function

![image](/blog/zeta-proof/Maths/Zeta/Helper.jpg?style=centerme)

## Functional Relation

![image](/blog/zeta-proof/Maths/Zeta/FunctionalRelation.jpg?style=centerme)

As is known, the formula F(s) does not contain non-trivial zeros. Therefore,
all zeros in the numerator must also exist in the denominator. So

![image](/blog/zeta-proof/Maths/Zeta/AbsFunctionalRelation.jpg?style=centerme)

From this it follows that for all non-trivial zeros the condition must hold:

![image](/blog/zeta-proof/Maths/Zeta/y-1.jpg?style=centerme)

What finish the proof.
