'use client'

import { useState } from 'react';
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import type { CartPageProps, CartItem } from '../types/cart';
import Image from 'next/image';
import Header from './Header';
import Footer from './Footer';
import { useRouter } from 'next/navigation';

export default function CartPage({ header, cartItems: initialCartItems, cartSummary, footer }: CartPageProps) {
  const router = useRouter();
  const [cartItems, setCartItems] = useState<CartItem[]>(initialCartItems);

  const updateQuantity = (itemId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeItem(itemId);
      return;
    }
    
    setCartItems(items => 
      items.map(item => 
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (itemId: string) => {
    setCartItems(items => items.filter(item => item.id !== itemId));
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const subtotal = calculateSubtotal();
  const shipping = subtotal > 50 ? 0 : 5.99;
  const tax = subtotal * 0.0875; // 8.75% tax rate
  const total = subtotal + shipping + tax;

  if (cartItems.length === 0) {
    return (
      <>
        <Header siteName={header.siteName} navigationLinks={header.navigationLinks} />
        <div className="min-h-screen flex flex-col items-center justify-center px-5 sm:px-10 lg:px-20 py-16">
          <ShoppingBag className="w-24 h-24 text-product-text-secondary mb-6" />
          <h1 className="product-heading mb-4">Your Cart is Empty</h1>
          <p className="product-body text-center mb-8 max-w-md">
            Looks like you haven't added any items to your cart yet. Start shopping to fill it up!
          </p>
          <button
            onClick={() => router.push('/shop')}
            className="bg-product-button-bg text-product-button-text px-8 py-3 rounded-md font-inter font-medium hover:opacity-90 transition-all duration-200"
          >
            Continue Shopping
          </button>
        </div>
        <Footer 
          siteName={footer.siteName}
          navigationLinks={footer.navigationLinks}
          socialIcons={footer.socialIcons}
        />
      </>
    );
  }

  return (
    <>
      <Header siteName={header.siteName} navigationLinks={header.navigationLinks} />
      
      <div className="min-h-screen px-5 sm:px-10 lg:px-20 py-8 sm:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto">
          <h1 className="product-title mb-8">Shopping Cart</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-6">
              {cartItems.map((item) => (
                <div key={item.id} className="flex flex-col sm:flex-row gap-4 p-4 border border-product-border rounded-lg">
                  <div className="relative w-full sm:w-32 h-32 flex-shrink-0 rounded-lg overflow-hidden bg-product-image-bg">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  
                  <div className="flex-grow">
                    <h3 className="product-card-title text-lg mb-2">{item.name}</h3>
                    {item.description && (
                      <p className="product-body text-sm mb-3">{item.description}</p>
                    )}
                    <div className="flex items-center justify-between">
                      <p className="product-price text-lg">${item.price.toFixed(2)}</p>
                      
                      <div className="flex items-center gap-3">
                        {/* Quantity Controls */}
                        <div className="flex items-center border border-product-border rounded-md">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-2 hover:bg-gray-100 transition-colors"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="px-4 py-2 font-medium">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-2 hover:bg-gray-100 transition-colors"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                        
                        {/* Remove Button */}
                        <button
                          onClick={() => removeItem(item.id)}
                          className="p-2 text-red-500 hover:bg-red-50 rounded-md transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                    
                    {/* Item Total */}
                    <div className="mt-3 text-right">
                      <p className="product-price text-lg">
                        Total: ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 p-6 rounded-lg sticky top-4">
                <h2 className="product-heading text-xl mb-6">Order Summary</h2>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="product-body">Subtotal</span>
                    <span className="product-body">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="product-body">Shipping</span>
                    <span className="product-body">
                      {shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="product-body">Tax</span>
                    <span className="product-body">${tax.toFixed(2)}</span>
                  </div>
                  <hr className="border-product-border" />
                  <div className="flex justify-between">
                    <span className="product-heading">Total</span>
                    <span className="product-heading">${total.toFixed(2)}</span>
                  </div>
                </div>
                
                {subtotal < 50 && (
                  <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-md">
                    <p className="text-sm text-blue-700">
                      Add ${(50 - subtotal).toFixed(2)} more for free shipping!
                    </p>
                  </div>
                )}
                
                <button className="w-full bg-product-button-bg text-product-button-text py-3 rounded-md font-inter font-medium hover:opacity-90 transition-all duration-200 mb-4">
                  Proceed to Checkout
                </button>
                
                <button
                  onClick={() => router.push('/shop')}
                  className="w-full border border-product-border py-3 rounded-md font-inter font-medium hover:bg-gray-50 transition-all duration-200"
                >
                  Continue Shopping
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer 
        siteName={footer.siteName}
        navigationLinks={footer.navigationLinks}
        socialIcons={footer.socialIcons}
      />
    </>
  );
}