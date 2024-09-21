document.addEventListener('DOMContentLoaded', () => {
    let cartCount = 0;

    // Add to Cart button
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function () {
            if (!this.classList.contains('added')) {
                cartCount++;
                document.getElementById('cart-badge').innerText = cartCount;
                this.classList.add('added');
                this.innerText = 'Added';
            }
        });
    });

    // Buy Now button
    document.querySelectorAll('.buy-now').forEach(button => {
        button.addEventListener('click', () => {
            $('#paymentModal').modal('show');
        });
    });
});
