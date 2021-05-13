import { loadStripe, Stripe } from '@stripe/stripe-js';

type stripepromise = Stripe | null;

const getStripe = async (publishKey: string): Promise<stripepromise> => {
	const stripePromise = await loadStripe(publishKey);
	return stripePromise;
};

export default getStripe;
