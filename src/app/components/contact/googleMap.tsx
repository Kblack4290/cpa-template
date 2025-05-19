export const GoogleMap = () => {
    return (
        <div className="rounded-lg overflow-hidden shadow-md h-64 w-full">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343034!2d-73.9858770845937!3d40.74844097932802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9aeb1c6b5%3A0x35b1cfbc89a6097f!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1615923256172!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                aria-hidden="false"
                tabIndex={0}
            />
        </div>
    );
};