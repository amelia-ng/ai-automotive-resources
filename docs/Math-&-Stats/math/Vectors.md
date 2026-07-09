*Reload the site if mathematic notations are not loaded correctly.*

## I. Core Vector Concepts
- **Magnitude**: The total length or size of a vector, denoted as $\Vert\vec{v}\Vert$ or $\vert{}\vec{v}\vert{}$.
- **Direction**: The orientation of the vector in space, often measured as an angle relative to a fixed axis.
- **Component Form**: Breaking a vector down into its perpendicular parts along coordinate axes. In 2D, it is written as $\vec{v} = \langle v_x, v_y \rangle$.
- **Unit Vector**: A vector with a magnitude of exactly 1. It is calculated by dividing a vector by its own magnitude:

$$\widehat{u}=\frac{\vec{v}}{\|\vec{v}\|}$$

- **Standard Basis Vectors**: Unit vectors pointing along the primary axes, denoted as $\hat{i} = \langle 1, 0, 0 \rangle$, $\hat{j} = \langle 0, 1, 0 \rangle$, and $\hat{k} = \langle 0, 0, 1 \rangle$.

## II. Operational Rules

### 1. Component Rules

For two vectors $\vec{u} = \langle u_x, u_y, u_z \rangle$ and $\vec{v} = \langle v_x, v_y, v_z \rangle$, and a scalar $c$:

- **Addition**: Add matching components together:\(\vec{u}+\vec{v}=\langle u_{x}+v_{x},u_{y}+v_{y},u_{z}+v_{z}\rangle \)
- **Subtraction**: Subtract matching components:\(\vec{u}-\vec{v}=\langle u_{x}-v_{x},u_{y}-v_{y},u_{z}-v_{z}\rangle \)
- **Scalar Multiplication**: Multiply every component by the scalar:\(c\vec{v}=\langle cv_{x},cv_{y},cv_{z}\rangle \)

### 2. Magnitude Formula
Derived from the Pythagorean theorem, the magnitude of a vector is the square root of the sum of its squared components:\(\|\vec{v}\|=\sqrt{v_{x}^{2}+v_{y}^{2}+v_{z}^{2}}\)

### 3. Geometric Multiplication Rule

- **Dot Product (Scalar Output)**: Measures how much two vectors point in the same direction.

$$\vec{u}\cdot \vec{v}=u_{x}v_{x}+u_{y}v_{y}+u_{z}v_{z}=\|\vec{u}\|\|\vec{v}\|\cos (\theta )$$

- **Cross Product (Vector Output)**: Generates a new vector perpendicular to both input vectors (only in 3D).

$$\vec{u}\times \vec{v}=\det \left[\begin{matrix}\widehat{i}&\widehat{j}&\widehat{k}\\ u_{x}&u_{y}&u_{z}\\ v_{x}&v_{y}&v_{z}\end{matrix}\right]=\langle u_{y}v_{z}-u_{z}v_{y},u_{z}v_{x}-u_{x}v_{z},u_{x}v_{y}-u_{y}v_{x}\rangle$$

The magnitude of the cross product is given by \(\Vert\vec{u} \times \vec{v}\Vert = \Vert\vec{u}\Vert \Vert\vec{v}\Vert \sin(\theta)\).

## III. Key Geometric Rules

- **Orthogonality (Perpendicularity)**: Two non-zero vectors are perpendicular if and only if their dot product equals zero:\(\vec{u}\cdot \vec{v}=0\iff \vec{u}\perp \vec{v}\)
- **Parallelism**: Two vectors are parallel if one is a scalar multiple of the other, meaning their cross product results in the zero vector:\(\vec{u}\times \vec{v}=\vec{0}\iff \vec{u}\parallel \vec{v}\)
- **Vector Projection**: The shadow of vector \(\vec{u}\) cast onto vector \(\vec{v}\) is calculated as:\(\text{proj}_{\vec{v}}\vec{u}=\left(\frac{\vec{u}\cdot \vec{v}}{\|\vec{v}\|^{2}}\right)\vec{v}\)

## IV. Vector Properties

Vector properties define how vectors behave under operations like addition, scalar multiplication, and vector multiplication (dot and cross products). Here is a comprehensive summary of the core mathematical properties of vectors.

### 1. Vector Addition Properties

Vector addition combines two or more vectors. Let \(\vec{u}\), \(\vec{v}\), and \(\vec{w}\) be vectors, and \(\vec{0}\) be the zero vector.

- **Commutative Property**: \(\vec{u} + \vec{v} = \vec{v} + \vec{u}\)
- **Associative Property**: \((\vec{u} + \vec{v}) + \vec{w} = \vec{u} + (\vec{v} + \vec{w})\)
- **Additive Identity**: \(\vec{u} + \vec{0} = \vec{u}\)
- **Additive Inverse**: \(\vec{u} + (-\vec{u}) = \vec{0}\)

### 2. Scalar Multiplication Properties

Scalar multiplication alters a vector's magnitude or direction using a scalar (real number) c or d.

- **Distributive Over Vectors**: \(c(\vec{u} + \vec{v}) = c\vec{u} + c\vec{v}\)
- **Distributive Over Scalars**: \((c + d)\vec{u} = c\vec{u} + d\vec{u}\)
- **Associative Property**: \(c(d\vec{u}) = (cd)\vec{u}\)
- **Identity Property**: \(1 \cdot \vec{u} = \vec{u}\)

### 3. Dot Product (Scalar Product) Properties

The dot product multiplies two vectors to yield a scalar. Let \(\vec{u}\), \(\vec{v}\), and \(\vec{w}\) be vectors, and c be a scalar.

- **Commutative Property**: \(\vec{u} \cdot \vec{v} = \vec{v} \cdot \vec{u}\)
- **Distributive Property**: \(\vec{u} \cdot (\vec{v} + \vec{w}) = \vec{u} \cdot \vec{v} + \vec{u} \cdot \vec{w}\)
- **Scalar Associativity**: \((c\vec{u}) \cdot \vec{v} = c(\vec{u} \cdot \vec{v}) = \vec{u} \cdot (c\vec{v})\)
- **Magnitude Relationship**: \(\vec{u} \cdot \vec{u} = \Vert{}\vec{u}\Vert{}^2\)
- **Orthogonality**: \(\vec{u} \cdot \vec{v} = 0 \iff \vec{u} \perp \vec{v}\) (for non-zero vectors)

### 4. Cross Product (Vector Product) Properties

The cross product is exclusive to 3D space and yields a vector perpendicular to both original vectors.

- **Anti-Commutative**: \(\vec{u} \times \vec{v} = -(\vec{v} \times \vec{u})\)
- **Distributive Property**: \(\vec{u} \times (\vec{v} + \vec{w}) = (\vec{u} \times \vec{v}) + (\vec{u} \times \vec{w})\)
- **Scalar Associativity**: \((c\vec{u}) \times \vec{v} = c(\vec{u} \times \vec{v}) = \vec{u} \times (c\vec{v})\)
- **Parallel Vectors**: \(\vec{u} \times \vec{u} = \vec{0}\) (and \(\vec{u} \times \vec{v} = \vec{0} \iff \vec{u} \parallel \vec{v}\))

### 5. Vector Magnitude (Norm) Properties

The magnitude \(\Vert{}\vec{u}\Vert{}\) measures the length of a vector. Let c be a scalar.

- **Non-Negativity**: \(\Vert{}\vec{u}\Vert{} \geq 0\) (and \(\Vert{}\vec{u}\Vert{} = 0 \iff \vec{u} = \vec{0}\))
- **Absolute Homogeneity**: \(\Vert{}c\vec{u}\Vert{} = \vert{}c\vert{} \cdot \Vert{}\vec{u}\Vert{}\)Triangle Inequality: \(\Vert{}\vec{u} + \vec{v}\Vert{} \leq \Vert{}\vec{u}\Vert{} + \Vert{}\vec{v}\Vert{}\)

## V. Interview Questions

1. Dot product: What’s the geometric interpretation of the dot product of two vectors?
    <details>
    <summary>Answer</summary>
    For vectors $a$ and $b$, the dot product is:

    $$
        a \cdot b = ||a||||b||\cos \theta
    $$

    where:

    - $||a||$: length (magnitude) of vector $a$
    - $||b||$: length (magnitude) of vector $b$
    - $\theta$: the angle between vectors $a$ and $b$
    </details>
    

2. Dot product: Given a vector $u$, find vector $v$ of unit length such that the dot product of $u$ and $v$ is maximum.
    <details>
    <summary>Answer</summary>
    To maximize the dot product $u \cdot v$ while maintaining $v$ as a unit vector (vector that has length = 1), $v$ must point in the same direction as $u$.
    Therefore, $v$ is simply the unit vector of $u$, calculated by dividing $||u||$ by its own length.
    $$
    v = \frac{u}{||u||}
    $$
    We also have: $u \cdot v = ||u||||v||\cos(\theta)$

    since $||v|| = 1$ 
    
    => $u \cdot v = ||u|| \cos (\theta)$ where $\theta$ is the angle between 2 vectors.

    $\cos(\theta)$ reaches its maximum value of 1 when angle is $0^o$, which means the vectors must be **perfectly aligned and parallel**.
    </details>



3. Outer product: [E] Given two vectors $a = [3, 2, 1]$ and  $b = [-1, 0, 1]$. Calculate the outer product $$a^Tb$$?

4. Outer product: [M] Give an example of how the outer product can be useful in ML.

5. [E] What does it mean for two vectors to be linearly independent?

6. [M] Given two sets of vectors $A = {a_1, a_2, a_3, ..., a_n}$ and $B = {b_1, b_2, b_3, ... , b_m}$. How do you check that they share the same basis?

7. [M] Given $$n$$ vectors, each of $d$ dimensions. What is the dimension of their span?

8. Norms and metrics: [E] What's a norm? What is $L_0, L_1, L_2, L_{norm}$?

9. [M] How do norm and metric differ? Given a norm, make a metric. Given a metric, can we make a norm?
