
Reload the site if mathematic notations are not loaded correctly.

## I. Matrix Concept & Rules

### 1. Core Matrix Concepts

- Dimensions (Order): The size of a matrix, written as m × n, where m is the number of horizontal rows and n is the number of vertical columns.
- Elements (Entries): The individual numbers inside a matrix, denoted by \(a_{i,j}\), where i indicates the row and j indicates the column.
- Square Matrix: A matrix with an equal number of rows and columns (m = n).
- Identity Matrix (I): A square matrix with ones on the main diagonal and zeros everywhere else. It acts like the number "1" in normal arithmetic.
- Zero Matrix (O): A matrix where every single element is zero.


### 2. Operational Rules

#### 2.1. Matrix Addition and Subtraction

- Rule: You can only add or subtract matrices if they have the exact same dimensions.
- Operation: Add or subtract the corresponding elements in the matching positions.

$$\begin{bmatrix} a & b \\ c & d \end{bmatrix} \pm \begin{bmatrix} e & f \\ g & h \end{bmatrix} = \begin{bmatrix} a \pm e & b \pm f \\ c \pm g & d \pm h \end{bmatrix}$$

#### 2.2. Scalar Multiplication

- Rule: You can multiply any matrix by a single real number (a scalar).
- Operation: Multiply every individual element inside the matrix by that scalar.

$$k \cdot \begin{bmatrix} a & b \\ c & d \end{bmatrix} = \begin{bmatrix} k \cdot a & k \cdot b \\ k \cdot c & k \cdot d \end{bmatrix}$$

#### 2.3. Matrix Multiplication (Dot Product)

- Rule: To multiply matrix A by matrix B (to get AB), the number of columns in A must exactly equal the number of rows in B. If A is m × n and B is n × p, the resulting matrix will be m × p.
- Operation: Multiply the elements of a row from the first matrix by the corresponding elements of a column from the second matrix, then add them together.
- Note: Order matters. AB $\neq$ BA

$$\begin{bmatrix} a & b \\ c & d \end{bmatrix} \begin{bmatrix} e & f \\ g & h \end{bmatrix} = \begin{bmatrix} ae+bg & af+bh \\ ce+dg & cf+dh \end{bmatrix}$$


#### 2.4. Key Advanced Matrix Rules

- The Transpose (\(A^{T}\)): Flipping a matrix over its diagonal, turning all rows into columns and columns into rows.
- The Determinant (\(\det(A)\) or |A|): A special scalar value calculated from a square matrix. If the determinant is exactly zero, the matrix is considered "singular" and cannot be inverted.
- The Inverse (A⁻¹): The matrix equivalent of a reciprocal (like \(x^{-1} = \frac{1}{x}\)). Multiplying a matrix by its inverse yields the Identity Matrix: $A \cdot A^{-1} = 1$



## II. Matrix Properties
### 1. Matrix Addition Properties

Matrix addition is defined for matrices of the same dimensions. Let \(A\), \(B\), and \(C\) be matrices of identical sizes, and \(O\) be the zero matrix.

- Commutative Property: \(A + B = B + A\)
- Associative Property: \((A + B) + C = A + (B + C)\)
- Additive Identity: \(A + O = O + A = A\)
- Additive Inverse: \(A + (-A) = O\)

### 2. Scalar Multiplication Properties

Let \(A\) and \(B\) be matrices, and \(c\) and \(d\) be scalars (real or complex numbers).

- Distributive Over Matrices: \(c(A + B) = cA + cB\)
- Distributive Over Scalars: \((c + d)A = cA + dA\)
- Associative Property: \(c(dA) = (cd)A\)
- Identity Property: \(1 \cdot A = A\)

### 3. Matrix Multiplication Properties

Matrix multiplication requires the number of columns in the first matrix to equal the number of rows in the second matrix. Let \(A\), \(B\), and \(C\) be appropriately sized matrices, and \(I\) be the identity matrix.

- Non-Commutative: \(AB \neq BA\) (Generally, order matters)
- Associative Property: \(A(BC) = (AB)C\)
- Distributive Property: \(A(B + C) = AB + AC\) and \((A + B)C = AC + BC\)
- Multiplicative Identity: \(IA = AI = A\)
- Zero Property: \(OA = AO = O\)

### 4. Transpose Properties

The transpose operation switches rows and columns, denoted by \(A^{T}\).

- Involution (Double Transpose): \((A^T)^T = A\)
- Sum/Difference Transpose: \((A \pm B)^T = A^T \pm B^T\)
- Scalar Product Transpose: \((cA)^T = cA^T\)
- Product Transpose (Reversal Order): \((AB)^T = B^T A^T\)

### 5. Determinant Properties

Determinants apply only to square matrices (\(n \times n\)). Let \(A\) and \(B\) be square matrices of the same size

- Product Rule: \(\det(AB) = \det(A) \cdot \det(B)\)
- Transpose Rule: \(\det(A^T) = \det(A)\)
- Scalar Product Rule: \(\det(cA) = c^n \det(A)\) (where \(n\) is the dimension)
- Inverse Rule: \(\det(A^{-1}) = \frac{1}{\det(A)}\) (if \(A\) is invertible)

### 6. Inverse Properties

A square matrix \(A\) has an inverse \(A^{-1}\) if and only if its determinant is non-zero (\(\det(A) \neq 0\)).

- Definition: \(A A^{-1} = A^{-1} A = I\)
- Inverse of an Inverse: \((A^{-1})^{-1} = A\)
- Product Inverse (Reversal Order): \((AB)^{-1} = B^{-1} A^{-1}\)
- Transpose of an Inverse: \((A^T)^{-1} = (A^{-1})^T\)


### 7. Special Matrix Types By Property
    
Matrices are often classified by how they interact with these operations:

- Symmetric Matrix: \(A^T = A\)
- Skew-Symmetric Matrix: \(A^T = -A\)
- Orthogonal Matrix: \(A^T = A^{-1}\) (which means \(A^T A = I\))
- Idempotent Matrix: \(A^2 = A\)

## II. Interview Questions
1. Inner product? How is it applied in ML?
    <details>
    <summary>Answer</summary>
    - Shape: $(1 \times n) \times (n \times 1)$ (Wide $\times$ Tall)
    - Output: Scalar (a single number)
    - Formula:

    $$
    u^Tv = \begin{bmatrix} u_1 & u_2\end{bmatrix}\begin{bmatrix} v_1 \\ v_2\end{bmatrix}=u_1v_1 + u_2v_2
    $$

    - Application: **Similarity & Reduction**. The inner product collapses two vectors into a single number. In AI, this represents how well two things align.
    
    Examples:

    - **Attention Mechanisms (Transformers)**: The core of LLMs relies on the inner product. When calculating "Scaled Dot-Product Attention", the query vector (\(Q\)) and key vector (\(K\)) use an inner product to determine how much attention a model should pay to a specific word.
    - **Fully Connected Layers**: A standard neural network layer performs \(\mathbf{w}^T\mathbf{x} + b\). The inner product checks how closely the input features (\(\mathbf{x}\)) match the learned neuron weights (\(\mathbf{w}\))
    - **Support Vector Machines (SVMs) & Kernels**: Kernel functions use inner products to compute the geometric distance and similarity between data points in high-dimensional space.

    </details>
 
2. Outer product? How is it applied in ML?
    <details>
    <summary>Answer</summary>
    **1. Outer Product $uv^T$**

    - Shape: $(m \times 1) \times (1 \times n)$ (Tall $\times$ Wide)
    - Output: $m \times n$
    - Formula:

    $$
    uv^T = \begin{bmatrix} u_1 \\ u_2 \end{bmatrix}\begin{bmatrix} v_1 & v_2 \end{bmatrix}=\begin{bmatrix} u_1v_1 & u_1v_2 \\ u_2v_1 & u_2v_2 \end{bmatrix}
    $$
    
    </details>

1. [E] Why do we say that matrices are linear transformations?
2. [E] What’s the inverse of a matrix? Do all matrices have an inverse? Is the inverse of a matrix always unique?
3. [E] What does the determinant of a matrix represent?
4. [E] What happens to the determinant of a matrix if we multiply one of its rows by a scalar $$t \times R$$?
5. [M] A $$4 \times 4$$ matrix has four eigenvalues $$3, 3, 2, -1$$. What can we say about the trace and the determinant of this matrix?
6. [M] Given the following matrix:<br>
	$$
	\begin{bmatrix}
		1 & 4 & -2 \\
		-1 & 3 & 2 \\
		3 & 5 & -6
	\end{bmatrix}
	$$

	Without explicitly using the equation for calculating determinants, what can we say about this matrix’s determinant?

	**Hint**: rely on a property of this matrix to determine its determinant.
7. [M] What’s the difference between the covariance matrix $$A^TA$$ and the Gram matrix $$AA^T$$?

8. Given $$A \in R^{n \times m}$$ and $$b \in R^n$$
	1. [M] Find $$x$$ such that: $$Ax = b$$.
	1. [E] When does this have a unique solution?
	1. [M] Why is it when A has more columns than rows, $$Ax = b$$ has multiple solutions?
	1. [M] Given a matrix A with no inverse. How would you solve the equation $$Ax = b$$? What is the pseudoinverse and how to calculate it?

9. Derivative is the backbone of gradient descent.
	1. [E] What does derivative represent?
	1. [M] What’s the difference between derivative, gradient, and Jacobian?

10. [H] Say we have the weights $$w \in R^{d \times m}$$ and a mini-batch $$x$$ of $$n$$ elements, each element is of the shape $$1 \times d$$ so that $$x \in R^{n \times d}$$. We have the output $$y = f(x; w) = xw$$. What’s the dimension of the Jacobian $$\frac{\delta y}{\delta x}$$?

11. [H] Given a very large symmetric matrix A that doesn’t fit in memory, say $$A \in R^{1M \times 1M}$$ and a function $$f$$ that can quickly compute $$f(x) = Ax$$ for $$x \in R^{1M}$$. Find the unit vector $$x$$ so that $$x^TAx$$ is minimal.
	
**Hint**: Can you frame it as an optimization problem and use gradient descent to find an approximate solution?