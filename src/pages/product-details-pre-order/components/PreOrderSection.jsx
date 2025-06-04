import React, { useState } from 'react';
import Icon from 'components/AppIcon';

const PreOrderSection = ({ quantity, setQuantity, onAddToCart, isAddedToCart, price }) => {
  const [selectedPayment, setSelectedPayment] = useState('full');
  const [showPaymentOptions, setShowPaymentOptions] = useState(false);

  const paymentOptions = [
    {
      id: 'full',
      label: 'Pay in Full',
      description: 'Complete payment now',
      amount: price,
      savings: 0
    },
    {
      id: 'installment',
      label: 'Pay in 3 Installments',
      description: '3 payments of $100',
      amount: 100,
      savings: 0
    },
    {
      id: 'deposit',
      label: 'Pre-order Deposit',
      description: 'Pay $99 now, rest on shipping',
      amount: 99,
      savings: 20
    }
  ];

  const incrementQuantity = () => {
    if (quantity < 5) setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const totalPrice = price * quantity;
  const selectedOption = paymentOptions.find(option => option.id === selectedPayment);

  return (
    <div className="space-y-6">
      {/* Quantity Selector */}
      <div>
        <h3 className="font-body font-semibold text-text-primary mb-3">Quantity</h3>
        <div className="flex items-center space-x-4">
          <div className="flex items-center border border-border rounded-organic">
            <button
              onClick={decrementQuantity}
              disabled={quantity <= 1}
              className="w-10 h-10 flex items-center justify-center text-text-secondary hover:text-text-primary disabled:opacity-50 disabled:cursor-not-allowed gentle-transition haptic-feedback"
            >
              <Icon name="Minus" size={16} />
            </button>
            <span className="w-12 text-center font-medium text-text-primary">{quantity}</span>
            <button
              onClick={incrementQuantity}
              disabled={quantity >= 5}
              className="w-10 h-10 flex items-center justify-center text-text-secondary hover:text-text-primary disabled:opacity-50 disabled:cursor-not-allowed gentle-transition haptic-feedback"
            >
              <Icon name="Plus" size={16} />
            </button>
          </div>
          <span className="text-sm text-text-secondary">Maximum 5 per order</span>
        </div>
      </div>

      {/* Payment Options */}
      <div>
        <h3 className="font-body font-semibold text-text-primary mb-3">Payment Options</h3>
        <div className="space-y-3">
          {paymentOptions.map((option) => (
            <label
              key={option.id}
              className={`flex items-center justify-between p-4 border rounded-organic cursor-pointer gentle-transition haptic-feedback ${
                selectedPayment === option.id
                  ? 'border-primary bg-primary-50' :'border-border hover:border-primary-300'
              }`}
            >
              <div className="flex items-center space-x-3">
                <input
                  type="radio"
                  name="payment"
                  value={option.id}
                  checked={selectedPayment === option.id}
                  onChange={(e) => setSelectedPayment(e.target.value)}
                  className="w-4 h-4 text-primary border-border focus:ring-primary"
                />
                <div>
                  <div className="font-medium text-text-primary flex items-center space-x-2">
                    <span>{option.label}</span>
                    {option.savings > 0 && (
                      <span className="bg-success-light text-success-dark px-2 py-0.5 rounded-organic text-xs font-medium">
                        Save ${option.savings}
                      </span>
                    )}
                  </div>
                  <div className="text-sm text-text-secondary">{option.description}</div>
                </div>
              </div>
              <div className="font-bold text-text-primary">${option.amount}</div>
            </label>
          ))}
        </div>
      </div>

      {/* Price Summary */}
      <div className="bg-surface rounded-organic p-4 space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-text-secondary">Subtotal ({quantity} item{quantity > 1 ? 's' : ''})</span>
          <span className="text-text-primary">${totalPrice}</span>
        </div>
        {selectedOption.savings > 0 && (
          <div className="flex justify-between text-sm">
            <span className="text-text-secondary">Pre-order Savings</span>
            <span className="text-success">-${selectedOption.savings * quantity}</span>
          </div>
        )}
        <div className="flex justify-between text-sm">
          <span className="text-text-secondary">Shipping</span>
          <span className="text-success">Free</span>
        </div>
        <div className="border-t border-border-light pt-2 flex justify-between">
          <span className="font-semibold text-text-primary">
            {selectedPayment === 'full' ? 'Total' : 'Due Today'}
          </span>
          <span className="font-bold text-lg text-text-primary">
            ${selectedOption.amount * quantity - (selectedOption.savings * quantity)}
          </span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="space-y-3">
        <button
          onClick={onAddToCart}
          className={`w-full py-4 rounded-organic font-body font-semibold text-lg gentle-transition haptic-feedback ${
            isAddedToCart
              ? 'bg-success text-text-inverse' :'bg-primary text-text-inverse hover:bg-primary-600'
          }`}
        >
          {isAddedToCart ? (
            <div className="flex items-center justify-center space-x-2">
              <Icon name="Check" size={20} />
              <span>Added to Cart!</span>
            </div>
          ) : (
            <div className="flex items-center justify-center space-x-2">
              <Icon name="ShoppingCart" size={20} />
              <span>
                {selectedPayment === 'full' ? 'Pre-Order Now' : 
                 selectedPayment === 'installment'? 'Start Installment Plan' : 'Reserve with Deposit'}
              </span>
            </div>
          )}
        </button>

        <button className="w-full py-3 border border-border text-text-primary rounded-organic font-body font-medium gentle-transition haptic-feedback hover:bg-surface">
          <div className="flex items-center justify-center space-x-2">
            <Icon name="Heart" size={18} />
            <span>Add to Wishlist</span>
          </div>
        </button>
      </div>

      {/* Delivery Information */}
      <div className="bg-accent-50 border border-accent-200 rounded-organic p-4">
        <div className="flex items-start space-x-3">
          <Icon name="Info" size={18} className="text-accent-600 mt-0.5 flex-shrink-0" />
          <div className="text-sm">
            <div className="font-medium text-accent-800 mb-1">Pre-order Information</div>
            <div className="text-accent-700">
              Expected shipping: March 2024. You'll receive email updates about your order status and shipping timeline.
            </div>
          </div>
        </div>
      </div>

      {/* Security Badges */}
      <div className="flex items-center justify-center space-x-6 pt-4 border-t border-border-light">
        <div className="flex items-center space-x-2 text-xs text-text-secondary">
          <Icon name="Shield" size={16} className="text-success" />
          <span>Secure Checkout</span>
        </div>
        <div className="flex items-center space-x-2 text-xs text-text-secondary">
          <Icon name="Lock" size={16} className="text-success" />
          <span>SSL Encrypted</span>
        </div>
        <div className="flex items-center space-x-2 text-xs text-text-secondary">
          <Icon name="CreditCard" size={16} className="text-success" />
          <span>Secure Payment</span>
        </div>
      </div>
    </div>
  );
};

export default PreOrderSection;